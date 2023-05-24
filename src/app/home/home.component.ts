import {Component, OnInit} from '@angular/core';
import {ProvidersService} from "../shared/services/providers.service";
import {ItemsService} from "../shared/services/items.service";
import {Router} from "@angular/router";
import {CartService} from "../shared/services/cart.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  isTopSellersLoading = true;
  topSellers: any[] = [];

  isTopItemsLoading = true;
  topItems: any[] = [];
  constructor(private readonly providersService: ProvidersService,
              private readonly itemsService: ItemsService,
              private readonly cartService: CartService,
              private router : Router) {
  }

  ngOnInit(): void {
    /* check if top-providers is in localstorage */
    if (localStorage.getItem('top-providers')) {
      console.log('top-providers is in localstorage');
      this.isTopSellersLoading = false;
      this.topSellers = JSON.parse(localStorage.getItem('top-providers') || '{}');
    } else {
      console.log('top-providers is not in localstorage');
      this.providersService.getTopProviders().subscribe((res: any) => {
        this.isTopSellersLoading = false;
        this.topSellers = res;
        this.providersService.updateTopProviders(res);
      });
    }

    /* check if top-items is in localstorage */
    if (localStorage.getItem('top-items')) {
      console.log('top-items is in localstorage');
      this.isTopItemsLoading = false;
      this.topItems = JSON.parse(localStorage.getItem('top-items') || '{}');
    } else {
      console.log('top-items is not in localstorage');
      this.itemsService.getTopItems().subscribe((res: any) => {
        this.itemsService.updateTopItems(res);
      });
    }
  }

  onAddToCart($event: any) {
    console.log('adding to cart: ', $event);
    if ($event.button === 'addRemove') {
      this.cartService.updateCart($event['item']);
    }
  }
}
