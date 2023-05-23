import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment.development";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProvidersService {

  private providersSubject = new BehaviorSubject<any>(null);
  providers$ = this.providersSubject.asObservable();


  private topProvidersSubject = new BehaviorSubject<any>(null);
  topProviders$ = this.providersSubject.asObservable();


  constructor(private readonly http: HttpClient) { }

  updateProviders(providers: any[]) {
    if (providers) {
      this.providersSubject.next(providers);
      localStorage.setItem('providers', JSON.stringify(providers));
    }
  }

  updateTopProviders(topProviders: any[]) {
    if (topProviders) {
      this.topProvidersSubject.next(topProviders);
      localStorage.setItem('top-providers', JSON.stringify(topProviders));
    }
  }

  getProviders(): Observable<any> {
    return this.http.get(`${environment.customBackendUrl}/get-providers`).pipe();
  }


  getTopProviders(): Observable<any> {
    /* get top providers from localstorage if it exists, if not get it from backend */
    let topProviders = JSON.parse(<any>localStorage.getItem('top-providers'));
    if (topProviders && topProviders.length > 0) {
      return new Observable<any>((observer) => {
        observer.next(topProviders);
      });
    } else {
      return this.http.get(`${environment.customBackendUrl}/get-top-providers`).pipe();
    }
  }

}
