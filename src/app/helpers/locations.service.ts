import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  constructor(private  httpClient: HttpClient) { }

  getAll():Observable<any>{
    return this.httpClient.get(`${environment.baseUrl}/locations`);
  }
}
