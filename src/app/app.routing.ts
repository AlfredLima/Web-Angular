import {RouterModule, Routes} from '@angular/router';
import {UsersComponent} from './users/users.component';
import {ModuleWithProviders} from '@angular/core';
import {AppComponent} from './app.component';


const APP_ROUTES: Routes = [
      { path: 'users' , component:UsersComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
