import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {EngageComponent} from "./engage.component";
import {PersonalComponent} from "../../shared/components/stepper/stepper-views/personal/personal.component";
import {ModeComponent} from "../../shared/components/stepper/stepper-views/mode/mode.component";
import {AnimalComponent} from "../../shared/components/stepper/stepper-views/animal/animal.component";
import {BookingComponent} from "../../shared/components/stepper/stepper-views/booking/booking.component";
import {PaymentComponent} from "../../shared/components/stepper/stepper-views/payment/payment.component";
import {ConfirmComponent} from "../../shared/components/stepper/stepper-views/confirm/confirm.component";



const routes: Routes = [
  {
    path: '',
    component: EngageComponent,
    children: [
      { path: '', redirectTo: 'personal', pathMatch: 'full' },
      { path: 'mode', component: ModeComponent },
      { path: 'personal', component: PersonalComponent },
      { path: 'animal', component: AnimalComponent },
      { path: 'booking', component: BookingComponent },
      { path: 'payment', component: PaymentComponent },
      { path: 'confirmation', component: ConfirmComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EngageRoutingModule { }
