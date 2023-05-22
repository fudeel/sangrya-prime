import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PrivateComponent} from "./private.component";

const routes: Routes = [
  {
    path: '',
    component: PrivateComponent,
  },
  {
    path: 'store',
    loadChildren: () => import('./store/store.module').then(m => m.StoreModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
