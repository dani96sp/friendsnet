import { Component, OnInit, Input } from '@angular/core';
import { PersonService } from '../../historietas/person.service';
import { Person } from '../../models/person.model';

@Component({
  selector: 'app-misdatos',
  templateUrl: './misdatos.component.html',
  styleUrls: ['./misdatos.component.css']
})
export class MisdatosComponent implements OnInit {
  person: Person;

  constructor(private personService: PersonService) { }

  ngOnInit() {
    this.personService.getPerson().subscribe(person => this.person = person);
  }

}
