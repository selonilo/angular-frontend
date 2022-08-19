import { PersonService } from './../../services/person.service';
import { PersonResponseModel } from './../../models/personResponseModel';
import { Person } from './../../models/person';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})

export class PersonComponent implements OnInit {
  
  age:string="";
  gender:string="";
  educationStatus:string="";
  persons:Person[]=[];
  dataLoaded = false;
  

  constructor(private personService:PersonService) { }

  ngOnInit(): void {
    
    this.getPersons();
  }
   
  
  getPersons(){
    localStorage.setItem("age",this.age)
    localStorage.setItem("gender",this.gender)
    localStorage.setItem("educationStatus",this.educationStatus)
    this.personService.getPersons().subscribe(response => {
      this.persons = response.content
      this.dataLoaded = true;
    })
  }



}


