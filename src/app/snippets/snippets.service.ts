import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class SnippetsService {

  constructor(private http:HttpClient) { }


  getSnippets(){
    return this.http.get( 'http://127.0.0.1:8000/snippets/' );
  }
  newSnippets( obj ){
    let headers:HttpHeaders = new HttpHeaders().set("Authorization", "Basic YWxmcmVkbzpBbGZyM2QwTCFtNA==");
    return this.http.post( 'http://127.0.0.1:8000/snippets/' , obj , {headers:headers});
  }
}
