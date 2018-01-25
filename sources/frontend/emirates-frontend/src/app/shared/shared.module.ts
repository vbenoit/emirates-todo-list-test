import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialModule } from '../material/material.module';

import { SharedComponents } from './components';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [
    ...SharedComponents
  ],
  entryComponents: [],
  exports: [
    CommonModule,
    MaterialModule,
    ...SharedComponents
  ]
})
export class SharedModule {
}
