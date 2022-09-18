import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {

  //iniciar propriedades
  //Nota: esses dados em verdade viriam da base de dados
  name: string = 'Anna';
  age:number = 39;
  job:string = 'Programmer';
  hobbies = ['reading','gardening','hiking']
  car={
    name:'Tesla',
    year:'2021',
  }
  constructor() { }

  ngOnInit(): void {
  }

}
