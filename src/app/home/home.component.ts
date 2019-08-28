import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';

import { AddEditContactDialog } from '../addeditcontact/addeditcontact.dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(public dialog: MatDialog) {

  }

  addContact() {
    this.dialog.open(AddEditContactDialog, {
      width: '600px'
    });
  }
}
