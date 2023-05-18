import {Component, OnInit} from '@angular/core';
import {StoreService} from "../../shared/services/store.service";
import {CartService} from "../../shared/services/cart.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  sellingItems = [];
  selectedItemDetails: any = null;

  constructor(private readonly storeService: StoreService, private readonly cartService: CartService) {
    storeService.getStoreInformation().subscribe(res => {
      this.sellingItems = res.user.sellingItems;
    });
  }

  ngOnInit(): void {
  }

  addRemoveFromCartOrShowDetails($event: any) {
   if ($event.button === 'addRemove') {
     this.cartService.updateCart($event['item']);
   } else if ($event.button === 'details') {
     this.selectedItemDetails = $event['item'];
   }
  }
}
