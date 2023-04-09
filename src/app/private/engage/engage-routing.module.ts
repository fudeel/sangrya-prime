import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {EngageComponent} from "./engage.component";
import {PersonalComponent} from "../../shared/components/stepper/stepper-views/personal/personal.component";



const routes: Routes = [
  {
    path: '',
    component: EngageComponent,
    children: [
      { path: '', redirectTo: 'personal', pathMatch: 'full' },
      { path: 'personal', component: PersonalComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EngageRoutingModule { }
