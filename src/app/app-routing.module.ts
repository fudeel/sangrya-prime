import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from "@auth0/auth0-angular";
import {HomeMainComponent} from "./shared/Bitakon/Home/home-main/home-main.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
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
    loadChildren: () => import('./cancel/cancel.module').then(m => m.CancelModule)
  },
  {
    path: '',
    redirectTo: 'private',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
