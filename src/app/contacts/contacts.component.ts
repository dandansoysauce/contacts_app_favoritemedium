import { Component } from '@angular/core';
import { ContactService } from '../services/contact.service';

@Component({
    selector: 'app-contacts',
    templateUrl: './contacts.component.html',
    styleUrls: ['./contacts.component.scss']
  })
export class ContactsComponent {
  constructor(private contactService: ContactService) {
    contactService.allContacts.subscribe((nextValue) => {
      console.log(nextValue);
    });
  }
}