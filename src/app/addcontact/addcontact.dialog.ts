import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material';
import { ContactService } from '../services/contact.service';
import { Contact } from '../interfaces/contact';

@Component({
    selector: 'app-addcontact-dialog',
    templateUrl: './addcontact.dialog.html',
    styleUrls: ['./addcontact.dialog.scss']
  })
export class AddContactDialog implements OnInit {
  newContactFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, private contactService: ContactService, @Inject(MAT_DIALOG_DATA) private data: Contact) {}

  ngOnInit() {
    this.newContactFormGroup = this.formBuilder.group({
      name: [undefined, [Validators.required]],
      email: [undefined, [Validators.required, Validators.email]],
      phone: ['', Validators.pattern('[0-9]{0,10}')]
    });

    if (this.data) {
      this.newContactFormGroup.setValue({
        name: this.data.Name,
        email: this.data.Email,
        phone: this.data.Phone
      })
    }
  }

  addContact() {
    const newContact = {
      Name: this.newContactFormGroup.get('name').value,
      Email: this.newContactFormGroup.get('email').value,
      Phone: this.newContactFormGroup.get('phone').value,
      Favorite: false
    } as Contact;

    this.contactService.contacts = newContact;
  }
}