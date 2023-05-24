import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-popular-sellers',
  templateUrl: './popular-sellers.component.html',
  styleUrls: ['./popular-sellers.component.scss']
})
export class PopularSellersComponent implements OnInit {

  @Input() sellersData: any[] = [];


  constructor() {

  }

  ngOnInit(): void {
    console.log('sellersData: ', this.sellersData);
  }

}
