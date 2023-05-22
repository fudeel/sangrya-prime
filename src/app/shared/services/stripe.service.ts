import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class StripeService {

  constructor(private readonly http: HttpClient) { }


  createCheckoutSession(priceId: string) {
    return this.http.post('http://localhost:3000/create-checkout-session', {priceId: priceId}).pipe();
  }

}
