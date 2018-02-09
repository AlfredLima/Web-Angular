import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { SnippetsComponent } from './snippets/snippets.component';
import {SnippetsService} from './snippets/snippets.service';
import {MatButtonModule, MatCardModule, MatInputModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { UsersComponent } from './users/users.component';
import {UsersService} from './users/users.service';
import { DatePipe } from '@angular/common';
import {routing} from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    SnippetsComponent,
    UsersComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    routing
  ],
  exports: [DatePipe],
  providers: [UsersService, SnippetsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
