import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';

import { AddContactDialog } from '../addcontact/addcontact.dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(public dialog: MatDialog) {

  }

  addContact() {
    this.openDialog(AddContactDialog);
  }

  private openDialog(dialogComponent: any) {
    this.dialog.open(dialogComponent, {
      width: '600px'
    });
  }
}
