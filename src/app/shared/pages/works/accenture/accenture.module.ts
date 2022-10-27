import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccentureRoutingModule } from './accenture-routing.module';
import { AccentureComponent } from './accenture.component';


@NgModule({
  declarations: [
    AccentureComponent
  ],
  imports: [
    CommonModule,
    AccentureRoutingModule
  ]
})
export class AccentureModule { }
