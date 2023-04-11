import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProviderCardComponent } from './components/provider-card/provider-card.component';
import {CardModule} from "primeng/card";
import {ButtonModule} from "primeng/button";
import {ChipModule} from "primeng/chip";
import { StepperComponent } from './components/stepper/stepper.component';
import {StepsModule} from "primeng/steps";
import { PersonalComponent } from './components/stepper/stepper-views/personal/personal.component';
import { ModeComponent } from './components/stepper/stepper-views/mode/mode.component';
import { AnimalComponent } from './components/stepper/stepper-views/animal/animal.component';
import { BookingComponent } from './components/stepper/stepper-views/booking/booking.component';
import { PaymentComponent } from './components/stepper/stepper-views/payment/payment.component';
import { ConfirmComponent } from './components/stepper/stepper-views/confirm/confirm.component';
import {RadioButtonModule} from "primeng/radiobutton";
import {FormsModule} from "@angular/forms";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";


@NgModule({
  declarations: [
    ProviderCardComponent,
    StepperComponent,
    PersonalComponent,
    ModeComponent,
    AnimalComponent,
    BookingComponent,
    PaymentComponent,
    ConfirmComponent
  ],
    imports: [
        CommonModule,
        CardModule,
        ButtonModule,
        ChipModule,
        StepsModule,
        RadioButtonModule,
        FormsModule,
        FontAwesomeModule
    ],
  exports: [
    ProviderCardComponent,
    StepperComponent,
    CardModule,
    ButtonModule,
    ChipModule,
    StepsModule,
    RadioButtonModule,
    FormsModule
  ]
})
export class SharedModule { }
