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
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
