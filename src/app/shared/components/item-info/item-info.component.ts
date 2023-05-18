import {Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges} from '@angular/core';
import {CartService} from "../../services/cart.service";
import { faCartShopping, faTrash } from '@fortawesome/free-solid-svg-icons';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-item-info',
  templateUrl: './item-info.component.html',
  styleUrls: ['./item-info.component.scss']
})
export class ItemInfoComponent implements OnInit, OnDestroy, OnChanges{

  @Input() item: any;
  @Input() resetItem: boolean = false;
  @Output() selectItem: EventEmitter<any> = new EventEmitter<string>();

  isInCart: boolean = false;

  faCart = faCartShopping;
  faTrash = faTrash;

  cartSub: Subscription | undefined;

  constructor(private readonly cartService: CartService) {
    this.cartSub = cartService.cart$.subscribe( c => {
      if (this.item) {
        this.isInCart = this.cartService.isItemInCart(this.item._id);
      }
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes?.['item']?.currentValue) {
      this.isInCart = this.cartService.isItemInCart(changes?.['item'].currentValue._id);
    }
  }

  ngOnInit(): void {

  }

  addRemoveFromCartOrShowDetails(item: any, button: 'addRemove' | 'details') {
    this.selectItem.emit({item, button: button});
    this.isInCart = this.cartService.isItemInCart(item._id);
  }

  ngOnDestroy(): void {
    this.cartSub?.unsubscribe();
  }
}
