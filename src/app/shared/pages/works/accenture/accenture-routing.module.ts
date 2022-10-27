import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccentureComponent } from './accenture.component';

const routes: Routes = [{ path: '', component: AccentureComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccentureRoutingModule { }
