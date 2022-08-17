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
    //personResponseModel:PersonResponseModel={};
  

  constructor() { }

  ngOnInit(): void {0
  }

}
