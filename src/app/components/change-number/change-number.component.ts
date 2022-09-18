import { Component, OnInit, Output, EventEmitter } from '@angular/core';
//Output para enviar algo - seja dado seja evento
//EventEmitter - preciso pois estou enviando um evento- seu eu fosse enviar apenas dados, bastava o output
@Component({
  selector: 'app-change-number',
  templateUrl: './change-number.component.html',
  styleUrls: ['./change-number.component.css']
})
export class ChangeNumberComponent implements OnInit {

  @Output() changeNumber : EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  handleClick() {
    //Emite um evento contendo um determinado valor.
     this.changeNumber.emit();
  }

}
