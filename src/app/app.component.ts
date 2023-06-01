import {Component, OnInit} from '@angular/core';
import {PrimeNGConfig} from "primeng/api";
import { faCartShopping, faCreditCard } from '@fortawesome/free-solid-svg-icons';
import {CartService} from "./shared/services/cart.service";
import {StripeService} from "./shared/services/stripe.service";
import {Theme, ThemeTogglerService} from "./shared/Bitakon/services/theme-toggler/theme-toggler.service";
import {NavigationEnd, Router} from "@angular/router";
import {ProvidersService} from "./shared/services/providers.service";
import {ItemsService} from "./shared/services/items.service";
import {AuthService} from "@auth0/auth0-angular";
import {UserService} from "./shared/services/user.service";
import {getUserFromLocalStorageAndUpdateAppState, localStorageHandler} from "./shared/utils/localstorage-handler";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'sangrya-prime';

  isDarkTheme = true;

  themeSetting : boolean = false;

  handleThemeSetting () {
    this.themeSetting = true;
  }

  handleThemeSettingClose () {
    this.themeSetting = false;
  }

  faCart = faCartShopping;
  faCreditCard = faCreditCard;
  cart = [];

  showCart: boolean = false;
  selectedItemDetails: any = null;

  total = 0;



  constructor(private primengConfig: PrimeNGConfig,
              private readonly cartService: CartService,
              private readonly stripeService: StripeService,
              private tt: ThemeTogglerService,
              private readonly providersService: ProvidersService,
              private readonly itemsService: ItemsService,
              private readonly userService: UserService,
              private router : Router) {

    userService.updateUser(getUserFromLocalStorageAndUpdateAppState(), true);
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


    this.router.events.subscribe((evt) => {
      if(! (evt instanceof NavigationEnd)){
        return
      }
      window.scrollTo(0,0)
    });

  }

  onShowCart() {
    this.showCart = !this.showCart;
  }

  addRemoveFromCartOrShowDetails($event: any) {
    this.cartService.updateCart($event);
  }

  onCheckout() {
    const priceIds = this.cart.map((item: any) => item.priceId);
    this.stripeService.createCheckoutSession(priceIds).subscribe((res: any) => {
      window.location.href = res.sessionUrl;
    });
  }


  switchTheme(newTheme: Theme): void {
    this.tt.switchTheme(newTheme);
  }

  protected readonly top = top;
}
