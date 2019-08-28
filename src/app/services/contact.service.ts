import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class ContactService {
    allContacts = new Subject(); //all contacts subscribe
    
    //adds new contact to list, tell the subscriber about the change and store to localStorage
    set addContactToStore(newContact) {
        const updatedContacts = this.updateContacts(newContact);
        this.allContacts.next(updatedContacts);
        localStorage.setItem('all_contacts', JSON.stringify(updatedContacts));
    }

    //get the parsed value of contacts from localStorage
    get contactsFromStore() {
        return JSON.parse(localStorage.getItem('all_contacts'));
    }

    //gets all contacts, add new and return the parsed value
    private updateContacts(newContact) {
        let parsedContacts = null;
        const contactsStore = localStorage.getItem('all_contacts');
        if (contactsStore) {
            parsedContacts = JSON.parse(contactsStore);
            parsedContacts.push(newContact);
        }

        return parsedContacts;
    }
}