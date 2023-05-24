import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {CartService} from "../../../../services/cart.service";

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit, OnChanges{

  @Input() item: any;

  @Output() selectItem: EventEmitter<any> = new EventEmitter<string>();
  @Output() addToCart: EventEmitter<any> = new EventEmitter<any>();

  isInCart: boolean = false;

  constructor(private readonly cartService: CartService) {
    cartService.cart$.subscribe( c => {
      this.isInCart = this.cartService.isItemInCart(this.item?._id);
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
  }


  ngOnInit(): void {
    this.isInCart = this.cartService.isItemInCart(this.item._id);
  }
  addRemoveFromCartOrShowDetails(item: any, button: 'addRemove' | 'details') {
    this.selectItem.emit({item, button: button});
    this.isInCart = this.cartService.isItemInCart(item._id);
  }

}
