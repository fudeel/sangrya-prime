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
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {InputTextModule} from "primeng/inputtext";
import {CalendarModule} from "primeng/calendar";
import { TimepickerComponent } from './components/timepicker/timepicker.component';
import {DropdownModule} from "primeng/dropdown";
import { ItemCardComponent } from './components/item-card/item-card.component';
import {CarouselModule} from "primeng/carousel";


@NgModule({
  declarations: [
    ProviderCardComponent,
    StepperComponent,
    PersonalComponent,
    ModeComponent,
    AnimalComponent,
    BookingComponent,
    PaymentComponent,
    ConfirmComponent,
    TimepickerComponent,
    ItemCardComponent
  ],
    imports: [
        CommonModule,
        CardModule,
        ButtonModule,
        ChipModule,
        StepsModule,
        RadioButtonModule,
        FormsModule,
        FontAwesomeModule,
        InputTextModule,
        ReactiveFormsModule,
        CalendarModule,
        DropdownModule,
        CarouselModule
    ],
    exports: [
        ProviderCardComponent,
        StepperComponent,
        CardModule,
        ButtonModule,
        ChipModule,
        StepsModule,
        RadioButtonModule,
        FormsModule,
        ItemCardComponent
    ]
})
export class SharedModule { }
