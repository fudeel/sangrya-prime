import {Component, OnInit} from '@angular/core';
import {PrimeNGConfig} from "primeng/api";
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import {CartService} from "./shared/services/cart.service";
import {StripeService} from "./shared/services/stripe.service";


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

  total = 0;

  constructor(private primengConfig: PrimeNGConfig, private readonly cartService: CartService, private readonly stripeService: StripeService) {
  }

  ngOnInit(): void {

    this.cartService.cart$.subscribe( c => {

      this.cart = this.cartService.getCart();

      /* calculate total from this.cart */
      this.total = 0;
      this.cart.forEach((item: any) => {
        this.total += item.price;
      });
    });

    this.primengConfig.zIndex = {
      modal: 1100,    // dialog, sidebar
      overlay: 1000,  // dropdown, overlaypanel
      menu: 1000,     // overlay menus
      tooltip: 1100   // tooltip
    };
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

  onCheckout() {
    this.stripeService.createCheckoutSession('price_1NAHwPIiOYkh7G8aU9DnNpPB').subscribe((res: any) => {
      window.location.href = res.sessionUrl;
    });
  }
}
