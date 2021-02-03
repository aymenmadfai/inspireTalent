import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api'

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService{

  constructor() { }
  createDb(){

    let  users =  [
      {id: 1, firstName: 'Aymen', lastName:'Madfai', email: 'aymen.madfai@gmail.com', password: '1234', Role: 'superAdmin'},
      {id: 1, firstName: 'Jhon', lastName:'wick', email: 'jhon.wick@gmail.com', password: 'abcd', Role: 'admin'},
      {id: 1, firstName: 'Sam', lastName:'Briggs', email: 'sam.briggs@gmail.com', password: '56789', Role: 'admin'}
    ];
 
    return {users};
 
   }
}
