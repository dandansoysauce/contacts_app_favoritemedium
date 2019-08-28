import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-addcontact-dialog',
    templateUrl: './addcontact.dialog.html',
    styleUrls: ['./addcontact.dialog.scss']
  })
export class AddContactDialog implements OnInit {
  newContactFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.newContactFormGroup = this._formBuilder.group({
      name: [undefined, [Validators.required]],
      email: [undefined, [Validators.required, Validators.email]],
      phone: ['', Validators.pattern('[0-9]{0,10}')]
    });
  }
}