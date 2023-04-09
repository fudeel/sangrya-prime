import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProviderCardComponent } from './components/provider-card/provider-card.component';
import {CardModule} from "primeng/card";
import {ButtonModule} from "primeng/button";
import {ChipModule} from "primeng/chip";


@NgModule({
  declarations: [
    ProviderCardComponent
  ],
    imports: [
        CommonModule,
        CardModule,
        ButtonModule,
        ChipModule
    ],
  exports: [
    ProviderCardComponent
  ]
})
export class SharedModule { }
