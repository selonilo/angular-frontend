import { PersonResponseModel } from './../../models/personResponseModel';
import { Person } from './../../models/person';
import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  persons:Person[]=[];
  apiUrl = "http://localhost:8080/public/person?page=0&size=20"
  body:{} = {
    
  }

    //personResponseModel:PersonResponseModel={};
  

  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
    this.getPersons();
  }

  getPersons(){
    this.httpClient.post<PersonResponseModel>(this.apiUrl,this.body).subscribe((response) => {
      this.persons = response.content
    });
  }

}
