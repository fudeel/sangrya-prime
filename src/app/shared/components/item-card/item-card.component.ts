import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { faCartShopping, faTrash, faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {
  @Input() item: any;

  @Output() selectItem: EventEmitter<any> = new EventEmitter<string>();

  responsiveOptions: any[];

  isInCart: boolean = false;

  faCart = faCartShopping;
  faTrash = faTrash;
  faCircle = faCircleInfo;

  constructor(private readonly cartService: CartService) {
    this.responsiveOptions = [];
  }

  ngOnInit(): void {
    console.log('item: ', this.item);
    this.isInCart = this.cartService.isItemInCart(this.item._id);
  }

  showDetails(_id: string, button: 'details') {
    this.selectItem.emit({_id, button: button});
  }

  addRemoveFromCartOrShowDetails(item: any, button: 'addRemove' | 'details') {
    this.selectItem.emit({item, button: button});
    this.isInCart = this.cartService.isItemInCart(item._id);
  }
}