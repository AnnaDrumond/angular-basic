import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { DirectivesComponent } from './components/directives/directives.component';

const routes: Routes = [
  // Colocar o path de cada rota/página
  //path '' é a página inicial
  //Depois temos /list
  {path: '', component:FirstComponentComponent},
  {path: 'list', component:ListRenderComponent},
  //Abaixo é uma rota dinamica, ou seja, o id vai mudar cada vez que a página for acedida
  {path: 'list/:id', component:ItemDetailComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
