import { Injectable } from '@angular/core';
import {BehaviorSubject, catchError, Observable, switchMap, throwError} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment.development";
import {localStorageHandler} from "../utils/localstorage-handler";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject = new BehaviorSubject<any>(null);
  user$ = this.userSubject.asObservable();

  constructor(private readonly http: HttpClient) { }

  updateUser(user: any, isFromLocalStorage: boolean = false) {
    console.log(`${isFromLocalStorage ? '[3]' : ''} updating user: ${user}`);
    if (this.checkIfUserIsInLocalStorage()) {
      /* user is in localstorage, update userSubject with the user from localstorage */
      this.userSubject.next(JSON.parse(<string>localStorage.getItem('user')));

    } else {
      this.getUserInformationFromDb(true).subscribe(user => {
        console.log('[4] result from getUserInformationFromDb(): ', user);
        this.userSubject.next(user);
        localStorage.setItem('user', JSON.stringify(user));

      });
    }
  }

  createUserOnDb(): Observable<any> {
    console.log('creating user on db');
    return this.http.get(`${environment.customBackendUrl}/user/create`).pipe(
      catchError(error => {
        console.log('error on createUserOnDb(): ', error);
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


  getUserInformationFromDb(getFromDb: boolean = false): Observable<any> {
    console.log(`${getFromDb ? '[6]': '[5]'} getting user information from db`);
    return this.http.get(`${environment.customBackendUrl}/user/get`).pipe(
      catchError(error => {
        console.log('error on getting user information from db: ', error);
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


  checkIfUserIsInLocalStorage(): boolean {
    console.log('[4] checking if user is in local storage');
    const user = JSON.parse(<string>localStorage.getItem('user'));
    if (user && user?.['username']?.length > 0) {
      console.log('[5] Updating user from local storage');
      return true
    } else {
      console.log('[5] User not found in local storage');
      return false;
    }
  }
}
