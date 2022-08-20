import { Person } from './../models/person';
import { Observable } from 'rxjs';
import { Injectable, SimpleChanges } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { PersonResponseModel } from '../models/personResponseModel';


@Injectable({
  providedIn: 'root'
})
export class PersonService {

  apiUrl = "http://localhost:8080/public/person?page=0&size=20"
  age:string | null="";

  getBody(){
    let body:{} = {
      age:localStorage.getItem("age"),
      gender:localStorage.getItem("gender"),
      educationStatus:localStorage.getItem("educationStatus"),
      city:localStorage.getItem("city"),
      district:localStorage.getItem("district"),
      militaryStatus:localStorage.getItem("militaryStatus")
    }
    return body;
  }
  

  constructor(private httpClient:HttpClient) { }

  getPersons():Observable<PersonResponseModel> {
    let body = this.getBody()
    console.log(body)
    return this.httpClient.post<PersonResponseModel>(this.apiUrl,body);
  }

}

