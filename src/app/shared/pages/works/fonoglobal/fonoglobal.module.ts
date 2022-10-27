import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FonoglobalRoutingModule } from './fonoglobal-routing.module';
import { FonoglobalComponent } from './fonoglobal.component';


@NgModule({
  declarations: [
    FonoglobalComponent
  ],
  imports: [
    CommonModule,
    FonoglobalRoutingModule
  ]
})
export class FonoglobalModule { }
