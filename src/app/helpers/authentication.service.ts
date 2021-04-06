import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import { shareReplay, tap } from 'rxjs/operators';


import {User} from "../models/user";
import * as moment from "moment";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {


  constructor(private http: HttpClient) {

  }


  login(email:string, password:string ) {
    return this.http.post<User>(`${environment.baseUrl}/login`, {email, password}).pipe(
        tap((res)=>this.setSession(res),

        ),
         shareReplay()

    );

  }

  public setSession(authResult) {

  //  const expiresAt = moment().add(authResult.expiresIn,'second');

    localStorage.setItem('id_token', authResult.token);
   // localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
  }

  logout() {
    localStorage.removeItem("id_token");
   // localStorage.removeItem("expires_at");
  }

  public isLoggedIn() {
    //return moment().isBefore(this.getExpiration());
  console.log(!!localStorage.getItem('id_token'))
    return !!localStorage.getItem('id_token');

  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const expiration = localStorage.getItem("expires_at");
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }

}
