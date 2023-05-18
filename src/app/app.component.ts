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

  showCart: boolean = false;
  selectedItemDetails: any = null;

  constructor(private primengConfig: PrimeNGConfig, private readonly cartService: CartService) {
  }

  ngOnInit(): void {

    this.cartService.cart$.subscribe( c => {
      this.cart = c;
    })

    this.primengConfig.zIndex = {
      modal: 1100,    // dialog, sidebar
      overlay: 1000,  // dropdown, overlaypanel
      menu: 1000,     // overlay menus
      tooltip: 1100   // tooltip
    };
    this.cart = this.cartService.getCart();
  }

  onShowCart() {
    this.showCart = !this.showCart;
  }

  addRemoveFromCartOrShowDetails($event: any) {
    if ($event.button === 'addRemove') {
      this.cartService.updateCart($event['item']);
    } else if ($event.button === 'details') {
      this.selectedItemDetails = $event['item'];
    }
  }

}
