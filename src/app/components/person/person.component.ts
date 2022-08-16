import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  person1={
    personId: 1,
    personName: "Salih",
    categoryId: 5,
    age: 24
  }
  person2={
    personId: 2,
    personName: "Serdar",
    categoryId: 12,
    age: 28
  }
  person3={
    personId: 3,
    personName: "Levent",
    categoryId: 55,
    age: 30
  }
  person4={
    personId: 4,
    personName: "Kerim",
    categoryId: 21,
    age: 24
  }
  person5={
    personId: 6,
    personName: "Akın",
    categoryId: 13,
    age: 23
  }

  persons=[
    this.person1,
    this.person2,
    this.person3,
    this.person4,
    this.person5
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
