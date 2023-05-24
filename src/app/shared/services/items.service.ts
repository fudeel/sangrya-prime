import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment.development";

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  private topItemsSubject = new BehaviorSubject<any>(null);
  topItems$ = this.topItemsSubject.asObservable();


  constructor(private readonly http: HttpClient) { }

  updateTopItems(topItems: any[]) {
    if (topItems) {
      console.log('update top items: ', topItems);
      localStorage.setItem('top-items', JSON.stringify(topItems));
      this.topItemsSubject.next(topItems);
    }
  }


  getTopItems(): Observable<any> {
    return this.http.get(`${environment.customBackendUrl}/get-top-items`).pipe();
  }
}
