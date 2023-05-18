import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartSubject = new BehaviorSubject<any>(null);
  cart$ = this.cartSubject.asObservable();

  constructor() { }

  updateCart(_id: string) {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const index = cart.findIndex((item: any) => item._id === _id);
    if (index > -1) {
      cart.splice(index, 1);
    }
    else {
      cart.push({_id});
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    this.cartSubject.next(cart);
  }

  getCart() {
    return JSON.parse(localStorage.getItem('cart') || '[]');
  }

  isItemInCart(_id: string) {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const index = cart.findIndex((item: any) => item._id === _id);
    return index > -1;
  }
}
