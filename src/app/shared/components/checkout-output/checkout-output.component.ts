import {Component, OnInit} from '@angular/core';
import {Message} from "primeng/api";
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-checkout-output',
  templateUrl: './checkout-output.component.html',
  styleUrls: ['./checkout-output.component.scss']
})
export class CheckoutOutputComponent implements OnInit {

  messages: Message[] = [];

  isSuccess: boolean = false;
  isLocalStorageCartEmpty: boolean = false;

  constructor(private readonly cartService: CartService) {
    this.cartService.cart$.subscribe(cart => {
      this.isLocalStorageCartEmpty = cart?.length === 0;
    })
  }

  ngOnInit(): void {
    this.isSuccess = this.parseUrl();
    this.messages = [
      {severity:'success', summary: 'Success', detail: 'Your payment was successful!'},
      {severity:'error', summary: 'Cancel', detail: 'Your payment was cancelled!'}
    ];
    if (this.isSuccess) {
      this.messages.pop();
    } else {
      this.messages.shift();
    }
  }

  parseUrl(): boolean {
    /* get the URL and check if it ends with /success or /cancel */
    const url = window.location.href;
    const urlParts = url.split('/');
    const lastSegment = urlParts[urlParts.length - 1];
    return lastSegment === 'success';
  }

  onEmptyCart() {
    this.cartService.emptyCart();
  }
}
