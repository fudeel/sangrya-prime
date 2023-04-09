import { Injectable } from '@angular/core';
import {BehaviorSubject, catchError, Observable, switchMap, throwError} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment.development";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject = new BehaviorSubject<any>(null);
  user$ = this.userSubject.asObservable();

  constructor(private readonly http: HttpClient) { }

  updateUser(user: any) {
    if (user) {
      this.userSubject.next(user);
      localStorage.setItem('user', JSON.stringify(user));
    }
  }

  createUserOnDb(): Observable<any> {
    return this.http.get(`${environment.customBackendUrl}/user/create`).pipe(
      catchError(error => {
        console.log('error: ', error);
        const statusCode = error.status;
        if (statusCode === 409) {
          return this.getUserInformationFromDb().pipe(
            switchMap(result => {
              if (result?.user) {
                this.updateUser(result.user);
              }
              return throwError(error);
            })
          );
        } else {
          // Throw the error if it's not a 409 status code
          return throwError(error);
        }
      })
    );
  }


  getUserInformationFromDb(): Observable<any> {
    return this.http.get(`${environment.customBackendUrl}/user/get`).pipe(
      catchError(error => {
        console.log('error: ', error);
        const statusCode = error.status;
        if (statusCode === 404) {
          return this.createUserOnDb().pipe(
            switchMap(result => {
              if (result?.user) {
                this.updateUser(result.user);
              }
              return throwError(error);
            })
          );
        } else {
          // Throw the error if it's not a 409 status code
          return throwError(error);
        }
      })
    );
  }
}
