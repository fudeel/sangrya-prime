import {Component, OnInit} from '@angular/core';
import {StoreService} from "../../shared/services/store.service";
import {CartService} from "../../shared/services/cart.service";

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  sellingItems = [];

  constructor(private readonly storeService: StoreService, private readonly cartService: CartService) {
    storeService.getStoreInformation().subscribe(res => {
      this.sellingItems = res.user.sellingItems;
    });
  }

  ngOnInit(): void {

  }

  addRemoveFromCart($event: string) {
    this.cartService.updateCart($event);
  }
}
