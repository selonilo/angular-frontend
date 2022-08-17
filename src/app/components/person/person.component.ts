import { PersonService } from './../../services/person.service';
import { PersonResponseModel } from './../../models/personResponseModel';
import { Person } from './../../models/person';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  persons:Person[]=[];
  dataLoaded = false;
  filterText="";
  
  constructor(private personService:PersonService) { }

  ngOnInit(): void {
    this.getPersons();
  }

  getPersons(){
    this.personService.getPersons().subscribe(response => {
      this.persons = response.content
      this.dataLoaded = true;
    })
  }

}
