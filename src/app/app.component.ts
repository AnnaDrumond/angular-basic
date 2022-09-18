import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // Quero exportar o Username para usar no componente parent-data
  Username: string = 'Joaquim';

  //Quero exportar este objeto deste componente pai
  userData = {
    email: 'anna@pt.com',
    role:"admin",
   };

  title = 'Hello World!';
}
