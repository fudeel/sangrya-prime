import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { BidsService } from '../../services/BidsData/bids.service';
import SwiperCore, {Navigation } from "swiper";


SwiperCore.use([Navigation]);

@Component({
  selector: 'app-bids-area',
  templateUrl: './bids-area.component.html',
  styleUrls: ['./bids-area.component.scss']
})
export class BidsAreaComponent implements OnInit {

  bids : any;

  @Input() topItems: any[] = [];

  @Output() addToCart: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {
  }

  addToCartEvent(item: any, button: 'addRemove' | 'details') {
    this.addToCart.emit({item: item, button: button});
  }

}
