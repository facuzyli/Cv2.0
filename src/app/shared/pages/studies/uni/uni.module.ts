import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UniRoutingModule } from './uni-routing.module';
import { UniComponent } from './uni.component';

@NgModule({
  declarations: [
    UniComponent,
  ],
  imports: [
    CommonModule,
    UniRoutingModule
  ]
})
export class UniModule { }








