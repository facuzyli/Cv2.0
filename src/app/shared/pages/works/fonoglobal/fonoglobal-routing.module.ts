import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FonoglobalComponent } from './fonoglobal.component';

const routes: Routes = [{ path: '', component: FonoglobalComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FonoglobalRoutingModule { }
