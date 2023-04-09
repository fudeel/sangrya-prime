import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EngageComponent } from './engage.component';
import {EngageRoutingModule} from "./engage-routing.module";
import {SharedModule} from "../../shared/shared.module";



@NgModule({
  declarations: [
    EngageComponent
  ],
  imports: [
    CommonModule,
    EngageRoutingModule,
    SharedModule
  ]
})
export class EngageModule { }
