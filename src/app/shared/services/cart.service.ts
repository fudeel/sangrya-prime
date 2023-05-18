import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProvidersService {

  private cartSubject = new BehaviorSubject<any>(null);
  cart$ = this.cartSubject.asObservable();

  constructor() { }

  updateCart(cart: any[]) {
    if (cart) {
      this.cartSubject.next(cart);
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }
}
