import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import SwiperCore, {Navigation } from "swiper";
import {CartService} from "../../../services/cart.service";


SwiperCore.use([Navigation]);

@Component({
  selector: 'app-bids-area',
  templateUrl: './bids-area.component.html',
  styleUrls: ['./bids-area.component.scss']
})
export class BidsAreaComponent implements OnInit {

  @Input() topItems: any[] = [];

  @Output() addToCart: EventEmitter<any> = new EventEmitter<any>();

  constructor(private readonly cartService: CartService) {}

  ngOnInit(): void {
    // this.isInCart = this.cartService.isItemInCart(this.item._id);
  }

  addRemoveFromCartOrShowDetails($event: any) {
    console.log('bids-area.component.ts: addRemoveFromCartOrShowDetails(): $event: ', $event);
    this.addToCart.emit($event);
  }
}
