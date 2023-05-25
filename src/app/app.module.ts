import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { AuthModule } from '@auth0/auth0-angular';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthInterceptor} from "./shared/interceptors/auth.interceptor";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {DialogModule} from "primeng/dialog";
import {SharedModule} from "./shared/shared.module";
import {TableModule} from "primeng/table";
import {DataViewModule} from "primeng/dataview";
import {RatingModule} from "primeng/rating";
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
    HttpClientModule,
    AuthModule.forRoot({
      domain: 'sangrya-development.eu.auth0.com',
      clientId: 'uVaDkPLi8kG9TzwDsguceJQx1wBO0VKn',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),
    FontAwesomeModule,
    DialogModule,
    SharedModule,
    TableModule,
    DataViewModule,
    RatingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
