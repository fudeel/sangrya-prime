import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import { faCartShopping, faTrash, faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-item-card-prime',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit, OnChanges {
  @Input() item: any;

  @Output() selectItem: EventEmitter<any> = new EventEmitter<string>();

  responsiveOptions: any[];

  isInCart: boolean = false;

  faCart = faCartShopping;
  faTrash = faTrash;
  faCircle = faCircleInfo;

  constructor(private readonly cartService: CartService) {
    this.responsiveOptions = [];
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
