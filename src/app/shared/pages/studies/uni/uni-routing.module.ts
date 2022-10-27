import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UniComponent } from './uni.component'

const routes: Routes = [{ path: '', component: UniComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UniRoutingModule { }
