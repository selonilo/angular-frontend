import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { PersonResponseModel } from '../models/personResponseModel';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  apiUrl = "http://localhost:8080/public/person?page=0&size=20"

  body:{} = {
    
  }

  constructor(private httpClient:HttpClient) { }

  getPersons():Observable<PersonResponseModel> {
    return this.httpClient.post<PersonResponseModel>(this.apiUrl,this.body);
  }


}
