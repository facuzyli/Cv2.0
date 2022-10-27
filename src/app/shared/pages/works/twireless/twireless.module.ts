import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TwirelessRoutingModule } from './twireless-routing.module';
import { TwirelessComponent } from './twireless.component';


@NgModule({
  declarations: [
    TwirelessComponent
  ],
  imports: [
    CommonModule,
    TwirelessRoutingModule
  ]
})
export class TwirelessModule { }
