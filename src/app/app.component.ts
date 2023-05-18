import {Component, OnInit} from '@angular/core';
import {PrimeNGConfig} from "primeng/api";
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import {CartService} from "./shared/services/cart.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'sangrya-prime';
  faCart = faCartShopping;
  cart = [];

  constructor(private primengConfig: PrimeNGConfig, private readonly cartService: CartService) {
    cartService.cart$.subscribe( c => {
      console.log('cart: ', c);
      this.cart = c;
    })
  }

  ngOnInit(): void {
    this.primengConfig.zIndex = {
      modal: 1100,    // dialog, sidebar
      overlay: 1000,  // dropdown, overlaypanel
      menu: 1000,     // overlay menus
      tooltip: 1100   // tooltip
    };
    this.cart = this.cartService.getCart();
  }

}
