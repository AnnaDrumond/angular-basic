import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.css']
})
export class ParentDataComponent implements OnInit {

  // Receber o dado Username que enviei à partir de app.component.ts
  // o Angular não me deixa começar sem inicializar o dado
  //Neste caso eu posos iniciar o dado vazio, ou colocar o "!" que diz ao TypeScript que o dado será iniciado de certeza
  @Input() name: string = '';

  @Input() userData!: {email:string, role:string}
  constructor() { }

  ngOnInit(): void {
  }

}
