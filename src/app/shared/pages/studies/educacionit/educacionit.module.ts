import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EducacionitComponent } from './educacionit.component';
import { EducacionitRoutingModule } from './educacionit-routing.module';


@NgModule({
  declarations: [
    EducacionitComponent
  ],
  imports: [
    CommonModule,
    EducacionitRoutingModule
  ]
})
export class EducacionitModule { }
