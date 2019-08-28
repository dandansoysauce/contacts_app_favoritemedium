import { Component } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { Contact } from '../interfaces/contact';

@Component({
    selector: 'app-contacts',
    templateUrl: './contacts.component.html',
    styleUrls: ['./contacts.component.scss']
  })
export class ContactsComponent {
  contacts: Contact[];

  constructor(private contactService: ContactService) {
    this.contacts = contactService.contacts;

    contactService.allContacts.subscribe((nextValue: any[]) => {
      this.contacts = nextValue;
    });
  }
}