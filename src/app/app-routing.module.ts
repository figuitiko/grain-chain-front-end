import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginScreenComponent} from "./componnents/login-screen/login-screen.component";
import {DashboardComponent} from "./componnents/dashboard/dashboard.component";
import {AuthGuard} from "./helpers/auth.guard";
import {CharacterListComponent} from "./componnents/characters/character-list/character-list.component";
import {EpisodesListComponent} from "./componnents/episodes/episodes-list/episodes-list.component";


const routes: Routes = [

  {path:'dashboard', component:DashboardComponent, canActivate:[AuthGuard],outlet:'primary',
    children:[
      {
        path:'',
        component:CharacterListComponent,
        outlet:'dashboard'
      },
      {
        path:'episodes',
        component:EpisodesListComponent,
        outlet:'dashboard'
      }
    ]
  },
  {path:'', component:LoginScreenComponent, outlet:'primary'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
