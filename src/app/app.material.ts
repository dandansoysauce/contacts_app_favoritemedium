import { NgModule } from '@angular/core';

import {
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule
} from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule
    ],
    exports: [
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule
    ]
})
export class MaterialModule {}