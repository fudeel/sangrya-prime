import { Injectable } from '@angular/core';
import {BehaviorSubject, catchError, Observable, switchMap, throwError} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment.development";

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private userSubject = new BehaviorSubject<any>(null);
  user$ = this.userSubject.asObservable();

  constructor(private readonly http: HttpClient) { }

  getStoreInformation(): Observable<any> {
    return this.http.get(`${environment.customBackendUrl}/store`).pipe();
  }

}
