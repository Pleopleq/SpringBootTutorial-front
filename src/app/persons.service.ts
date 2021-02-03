import { Injectable } from '@angular/core';
import { MessageService } from './message.service'
import { Observable, of } from 'rxjs'
import { Person } from './IPerson'
import { PERSONS } from './mock-persons'

@Injectable({
  providedIn: 'root'
})
export class PersonsService {
  getPersons(): Observable<Person[]> {
    this.messageService.add('PersonService: fetched persons')
    return of(PERSONS)
  }

  constructor(private messageService: MessageService) { }
}
