import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CartService} from "../../../../services/cart.service";

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent {

  @Input() item: any;

  @Output() addToCart: EventEmitter<any> = new EventEmitter<any>();
  @Output() selectItem: EventEmitter<any> = new EventEmitter<string>();

  isInCart: boolean = false;

  constructor(private readonly cartService: CartService) {
    cartService.cart$.subscribe( c => {
      this.isInCart = this.cartService.isItemInCart(this.item?._id);
    })
  }


  addRemoveFromCartOrShowDetails(item: any, button: 'addRemove' | 'details') {
    console.log('item-card.component.ts: addRemoveFromCartOrShowDetails(): item: ', item, ' button: ', button);
    this.selectItem.emit({item, button: button});
  }

}
