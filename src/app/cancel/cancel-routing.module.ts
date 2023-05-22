import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CheckoutOutputComponent} from "../shared/components/checkout-output/checkout-output.component";

const routes: Routes = [
  {
    path: '',
    component: CheckoutOutputComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CancelRoutingModule { }
