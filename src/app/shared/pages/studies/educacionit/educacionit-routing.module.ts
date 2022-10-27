import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducacionitComponent } from './educacionit.component'

const routes: Routes = [{ path: '', component: EducacionitComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EducacionitRoutingModule { }
