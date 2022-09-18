import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/interfaces/Animal';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {

  //animals será recebido da base de dados em Json (db.json)
  animals: Animal[] = []

  //Aqui recebo ums instancia do meu service para poder aceder aos métodos que lá existem
  constructor(private listService:ListService) {
    console.log("entrei no construtor - em list-render.component.ts");
    this.getAnimals();
   }

  ngOnInit(): void {
  }

  removeAnimal(animal: Animal){
    console.log('entrei em removeAnimal em list-render.component.ts');
    //Esta primeira parte vai garantir que o animal seja removido do front/visualização
    this.animals = this.animals.filter((elementAnimal) => animal.name !== elementAnimal.name);
    //Agora neste segunda etapa, será removido da bd
    //Não preciso resgatar nenhum dado neste caso, porém preciso de um subscribe como se fosse apenas um .then()
    this.listService.remove(animal.id).subscribe();
  }

  animalDetails = '';
  //vou receber um animal do tipo da interface Animal interface
  showAge(animal: Animal):void{
    console.log(animal);
    this.animalDetails = 'The pet ' + animal.name + " is " + animal.age + " years old";
  }

  //vai acessar um método que estará no service (list.service)
  //.subscribe seria similar ao .then no JS
  getAnimals():void{
    console.log("entrei em getAnimals - em list-render.component.ts");
    //chamar a requisição vai buscar a lista de animais e atribuir a lista recebida ao meu array de animais
    //que está declarado na linha 13
      this.listService.getAllAnimalsinDb().subscribe(
        (animalsListHttp) => (this.animals = animalsListHttp));
  }

}
