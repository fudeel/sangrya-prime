import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreRoutingModule} from "./store-routing.module";
import { StoreComponent } from './store.component';
import {SharedModule} from "../../shared/shared.module";
import {DialogModule} from "primeng/dialog";



@NgModule({
  declarations: [
    StoreComponent
  ],
    imports: [
        StoreRoutingModule,
        CommonModule,
        SharedModule,
        DialogModule
    ]
})
export class StoreModule { }
