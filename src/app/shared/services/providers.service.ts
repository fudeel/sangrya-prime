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

  constructor(private readonly http: HttpClient) { }

  updateProviders(providers: any[]) {
    if (providers) {
      this.providersSubject.next(providers);
      localStorage.setItem('providers', JSON.stringify(providers));
    }
  }

  getProviders(): Observable<any> {
    return this.http.get(`${environment.customBackendUrl}/get-providers`).pipe();
  }

}
