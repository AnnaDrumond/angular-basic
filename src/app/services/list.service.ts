import { Injectable } from '@angular/core';
import { Animal } from '../interfaces/Animal';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// este abaixo também é para usarmos requisições http
//https://dev.to/felipedsc/observables-como-funcionam-15eb
//https://stackblitz.com/edit/fdsc-angular-observables?file=src%2Fapp%2Fapp.component.ts
//https://tableless.com.br/entendendo-rxjs-observable-com-angular/
import { Observable } from 'rxjs';
/*o novo Angular foi construído pensando em aplicações reativas,
abandonando o uso de Promises e adotando por padrão o Observable.
Um dos operadores mais importantes do Observable é o subscribe,
que é o equivalente ao then de uma promise ou ao $watch.*/

@Injectable({
  providedIn: 'root'
})
export class ListService {



  // esta é a url para aceder a "bd" ficticia que está em db.json
  private apiUrl = 'http://localhost:3000/animals';

  constructor(private http: HttpClient) {
    console.log("entrei em constructor - em list.service.ts");
   }

  remove(id: number) {
    //Não tenho o Observable porque o próprio lis-render já está atualizando/excluindo o dado
    //da lista que será renderizada na página
    //excluir o animal a quem pertence este id, na url/endpoints do backend armazenada em apiUrl/id
    //como se apiUrl fosse a urlDefault do backend e depois chamamos os devidos endpoints
    console.log("entrei em removeAnimalById - em list.service.ts");
    return this.http.delete<Animal>(`${this.apiUrl}/${id}`);
  }

  //Requisição http
  getAllAnimalsinDb(): Observable<Animal[]>{
    console.log("entrei em getAllAnimalsinDb - em list.service.ts");
    //buscar a lista de animais na url/endpoints do backend armazenda em apiUrl
    return this.http.get<Animal[]>(this.apiUrl);
  }

  //Requisição http
  getAnimalByIdService(id:number) : Observable<Animal> {
    console.log("entrei em getAnimalByIdService - em list.service.ts");
     //buscar o animal a quem pertence este id, na url/endpoints do backend armazenda em apiUrl/id
     //como se apiUrl fosse a urlDefault do backend e depois chamamos os devidos endpoints
    return this.http.get<Animal>(`${this.apiUrl}/${id}`);
  }

}
