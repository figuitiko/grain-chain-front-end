import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Character} from "../models/character";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private  httpClient: HttpClient) { }

  getAll():Observable<any>{
    return  this.httpClient.get(`${environment.baseUrl}/characters`);
  }
  updateCharacter(id, data):Observable<any>{
    return this.httpClient.put(`${environment.baseUrl}/characters/${id}`, data);
  }
}
