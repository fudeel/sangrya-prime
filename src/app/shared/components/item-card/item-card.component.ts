import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { faCartShopping, faTrash } from '@fortawesome/free-solid-svg-icons';
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {
  @Input() item: any;

  @Output() selectItem: EventEmitter<string> = new EventEmitter<string>();

  responsiveOptions: any[];

  isInCart: boolean = false;

  cart = faCartShopping;
  trash = faTrash;

  constructor(private readonly cartService: CartService) {
    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  ngOnInit(): void {
    console.log('item: ', this.item);
  }

  addRemoveFromCart(_id: string) {
    this.selectItem.emit(_id);
  }
}
