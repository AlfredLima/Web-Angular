import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class UsersService {

  constructor(private http:HttpClient) { }

  getUsers(){
    return this.http.get(  "http://127.0.0.1:8000/publications/" );
  }

  createUsers( User ){
    let headers:HttpHeaders = new HttpHeaders().set("Authorization", "Basic YWxmcmVkbzpBbGZyM2QwTCFtNA==");
    return this.http.post( 'http://127.0.0.1:8000/publication/' , User , {headers:headers});
  }
}
