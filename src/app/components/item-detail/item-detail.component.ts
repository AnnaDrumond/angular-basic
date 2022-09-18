import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/interfaces/Animal';
import { ActivatedRoute } from '@angular/router';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  // ? - este "animal" pode receber ou não valores
  //Se eu tivesse de instanciar obrigatoriamente seria !
  animal?: Animal;

  //pegar as instancias que preciso
  constructor(private listService:ListService, private route:ActivatedRoute) {
    this.getAnimalById();

  }
  getAnimalById() {
    console.log("entrei em getAnimalById em item-detail.component.ts");
    //extrair o id que tenho na minha url e fazer o parse dele para um Number
    const id = Number(this.route.snapshot.paramMap.get("id"));
    //chamar a requisição que está no service, enviando o id 
    //para poder manipular os dados uso o subscribe, que seria similar ao .then do JS
    this.listService.getAnimalByIdService(id).subscribe(
      (animalHttpResponse) => (this.animal = animalHttpResponse)
    );
  }

  ngOnInit(): void {
  }

}
