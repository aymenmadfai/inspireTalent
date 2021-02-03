import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  SERVER_URL: string = "http://localhost:8080/api/";
  constructor(private httpClient: HttpClient) { }
  public getUsers() {
    return this.httpClient.get(this.SERVER_URL + 'users');
  }
  public getUserById(id: any) {
    return this.httpClient.get(`${this.SERVER_URL + 'users'}/${id}`);
  }
}
