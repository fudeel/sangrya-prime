import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CartService} from "../../services/cart.service";
import { faCartShopping, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-item-info',
  templateUrl: './item-info.component.html',
  styleUrls: ['./item-info.component.scss']
})
export class ItemInfoComponent implements OnInit{

  @Input() item: any;
  @Output() selectItem: EventEmitter<any> = new EventEmitter<string>();

  isInCart: boolean = false;

  faCart = faCartShopping;
  faTrash = faTrash;

  constructor(private readonly cartService: CartService) {

  }

  ngOnInit(): void {
    this.isInCart = this.cartService.isItemInCart(this.item._id);
  }

  addRemoveFromCartOrShowDetails(item: any, button: 'addRemove' | 'details') {
    this.selectItem.emit({item, button: button});
    this.isInCart = this.cartService.isItemInCart(item._id);
  }
}
