import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginScreenComponent } from './componnents/login-screen/login-screen.component';
import { DashboardComponent } from './componnents/dashboard/dashboard.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { CharacterListComponent } from './componnents/characters/character-list/character-list.component';
import { CharacterItemComponent } from './componnents/characters/character-item/character-item.component';
import { CharacterEditComponent } from './componnents/characters/character-edit/character-edit.component';
import { EpisodesListComponent } from './componnents/episodes/episodes-list/episodes-list.component';
import {JwtInterceptorService} from "./helpers/jwt-interceptor.service";
import {NgxPaginationModule} from "ngx-pagination";
import { AlertComponent } from './componnents/alert/alert.component';
import { EpisodesItemComponent } from './componnents/episodes/episodes-item/episodes-item.component';
import { NotFoundComponent } from './componnents/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginScreenComponent,
    DashboardComponent,
    CharacterListComponent,
    CharacterItemComponent,
    CharacterEditComponent,
    EpisodesListComponent,
    AlertComponent,
    EpisodesItemComponent,
    NotFoundComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        NgxPaginationModule,
        FormsModule
    ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
