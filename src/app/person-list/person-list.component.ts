import { Component, OnInit } from '@angular/core';
import { PersonsService } from '../persons.service'
import { Person } from '../IPerson';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  selectedPerson: Person;
  persons: Person[]


  constructor(private personService: PersonsService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getPersons()
  }

  getPersons(): void {
    this.personService.getPersons()
      .subscribe(persons => this.persons = persons)
  }

  onSelect(person: Person): void {
    this.selectedPerson = person
    this.messageService.add(`PersonsComponent: Selected Person id=${person.id}`)
  }

}
