import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProviderCardComponent } from './components/provider-card/provider-card.component';
import {CardModule} from "primeng/card";
import {ButtonModule} from "primeng/button";
import {ChipModule} from "primeng/chip";
import {StepsModule} from "primeng/steps";
import {RadioButtonModule} from "primeng/radiobutton";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {InputTextModule} from "primeng/inputtext";
import {CalendarModule} from "primeng/calendar";
import { TimepickerComponent } from './components/timepicker/timepicker.component';
import {DropdownModule} from "primeng/dropdown";
import { ItemCardComponent } from './components/item-card/item-card.component';
import {CarouselModule} from "primeng/carousel";
import { ItemInfoComponent } from './components/item-info/item-info.component';
import { CheckoutOutputComponent } from './components/checkout-output/checkout-output.component';
import {MessagesModule} from "primeng/messages";


@NgModule({
  declarations: [
    ProviderCardComponent,
    TimepickerComponent,
    ItemCardComponent,
    ItemInfoComponent,
    CheckoutOutputComponent
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
    CarouselModule,
    MessagesModule
  ],
  exports: [
    ProviderCardComponent,
    CardModule,
    ButtonModule,
    ChipModule,
    StepsModule,
    RadioButtonModule,
    FormsModule,
    ItemCardComponent,
    ItemInfoComponent
  ]
})
export class SharedModule { }
