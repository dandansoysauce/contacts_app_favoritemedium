import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ContactService } from '../services/contact.service';
import { Contact } from '../interfaces/contact';
import { AddEditContactDialog } from '../addeditcontact/addeditcontact.dialog';

@Component({
    selector: 'app-contacts',
    templateUrl: './contacts.component.html',
    styleUrls: ['./contacts.component.scss']
  })
export class ContactsComponent {
  otherContacts: Contact[];
  faveContacts: Contact[];

  constructor(private contactService: ContactService, private dialog: MatDialog) {
    this.filterContacts(contactService.contacts);

    contactService.allContacts.subscribe((nextValue: any[]) => {
      this.filterContacts(nextValue);
    });
  }

  editContact(contact: Contact) {
    this.dialog.open(AddEditContactDialog, {
      width: '600px',
      data: contact
    });
  }

  favoriteThisContact(contact: Contact) {
    contact.Favorite = !contact.Favorite;
    this.contactService.contacts = contact;
  }

  private filterContacts(contacts: Contact[]) {
    this.faveContacts = contacts.filter(x => x.Favorite)
    this.otherContacts = contacts.filter(x => !x.Favorite)
  }
}