import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from "@auth0/auth0-angular";

const routes: Routes = [
  {
    path: 'private',
    loadChildren: () => import('./private/private.module').then(m => m.PrivateModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'success',
    loadChildren: () => import('./success/success.module').then(m => m.SuccessModule),
  },
  {
    path: 'cancel',
    loadChildren: () => import('./cancel/cancel.module').then(m => m.CancelModule),
    canActivate: [AuthGuard],
  },
  {
    path: '',
    redirectTo: 'private',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
