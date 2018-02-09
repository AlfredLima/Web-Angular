import { Component, OnInit } from '@angular/core';

import { SnippetsService } from './snippets.service';
import {Snippet} from './snippet';

@Component({
  selector: 'app-snippets',
  templateUrl: './snippets.component.html',
  styleUrls: ['./snippets.component.css']
})
export class SnippetsComponent implements OnInit {

  snipptes : any [] = [];

  snippet:Snippet = new Snippet();

  constructor ( private snipptersService:SnippetsService ){

  }

  save(){
    this.snipptersService.newSnippets( this.snippet ).subscribe((data:any) => {
     this.snipptes.unshift(data);
    });
  }

  ngOnInit(){
    this.snipptersService.getSnippets().subscribe((data:any) => {
      this.snipptes = data.results;
    }, error => {

    });
  }

}
