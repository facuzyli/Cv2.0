import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TwirelessComponent } from './twireless.component';

const routes: Routes = [{ path: '', component: TwirelessComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TwirelessRoutingModule { }
