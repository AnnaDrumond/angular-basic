import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  show: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  // Se não há retorno, TS exige que isso seja indicado
  showMessage():void {
    this.show = !this.show;//toggle
  }

}
