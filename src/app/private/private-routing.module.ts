import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PrivateComponent} from "./private.component";

const routes: Routes = [
  {
    path: '',
    component: PrivateComponent,
  }, {
    path: 'engage/:id',
    loadChildren: () => import('./engage/engage.module').then(m => m.EngageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
