import { Component, OnInit } from '@angular/core';
import {UsersService} from './users.service';
import {User} from './user';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  user : User = new User();
  users : any [] = [];
  constructor( private usersService:UsersService) { }

  ngOnInit(){
    this.usersService.getUsers().subscribe((data:any) => {
      this.users = data.results;
    }, error => {

    });
  }

  newUser(){
    //this.usersService
  }

}
