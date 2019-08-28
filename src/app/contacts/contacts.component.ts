import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ContactService } from '../services/contact.service';
import { Contact } from '../interfaces/contact';
import { AddContactDialog } from '../addcontact/addcontact.dialog';

@Component({
    selector: 'app-contacts',
    templateUrl: './contacts.component.html',
    styleUrls: ['./contacts.component.scss']
  })
export class ContactsComponent {
  contacts: Contact[];

  constructor(contactService: ContactService, private dialog: MatDialog) {
    this.contacts = contactService.contacts;

    contactService.allContacts.subscribe((nextValue: any[]) => {
      this.contacts = nextValue;
    });
  }

  editContact(contact: Contact) {
    this.dialog.open(AddContactDialog, {
      width: '600px',
      data: contact
    });
  }
}