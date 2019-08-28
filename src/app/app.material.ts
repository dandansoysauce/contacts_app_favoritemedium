import { NgModule } from '@angular/core';

import {
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatDialogModule,
    MatInputModule
} from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule,
        MatDialogModule,
        MatInputModule
    ],
    exports: [
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule,
        MatDialogModule,
        MatInputModule
    ]
})
export class MaterialModule {}