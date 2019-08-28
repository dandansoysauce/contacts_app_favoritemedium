import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material';
import { ContactService } from '../services/contact.service';
import { Contact } from '../interfaces/contact';

@Component({
    selector: 'app-addeditcontact-dialog',
    templateUrl: './addeditcontact.dialog.html',
    styleUrls: ['./addeditcontact.dialog.scss']
  })
export class AddEditContactDialog implements OnInit {
  title: string;
  newContactFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, private contactService: ContactService, @Inject(MAT_DIALOG_DATA) private data: Contact) {}

  ngOnInit() {
    this.newContactFormGroup = this.formBuilder.group({
      name: [undefined, [Validators.required]],
      email: [undefined, [Validators.required, Validators.email]],
      phone: ['', Validators.pattern('[0-9]{0,10}')]
    });

    if (this.data) {
      this.title = 'Edit';
      this.newContactFormGroup.setValue({
        name: this.data.Name,
        email: this.data.Email,
        phone: this.data.Phone
      })
    } else {
      this.title = 'Add';
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