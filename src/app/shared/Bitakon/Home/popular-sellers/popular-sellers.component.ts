import { Component, OnInit } from '@angular/core';
import {ProvidersService} from "../../../services/providers.service";

@Component({
  selector: 'app-popular-sellers',
  templateUrl: './popular-sellers.component.html',
  styleUrls: ['./popular-sellers.component.scss']
})
export class PopularSellersComponent implements OnInit {


  /*sellersData = [
    {
      id:1,
      img:'assets/img/seller/seller-1.jpg',
      name:'Robin Milford',
      revenue:'00.74',
      color:''
    },
    {
      id:2,
      img:'assets/img/seller/seller-2.jpg',
      name:'Penny Tool',
      revenue:'00.254',
      color:'clr-green'
    },
    {
      id:3,
      img:'assets/img/seller/seller-3.jpg',
      name:'Shahnewaz SP',
      revenue:'00.20',
      color:'clr-orange'
    },
    {
      id:4,
      img:'assets/img/seller/seller-4.jpg',
      name:'Joss Sticks',
      revenue:'00.74',
      color:'clr-purple'
    },
    {
      id:5,
      img:'assets/img/seller/seller-5.jpg',
      name:'Ruüd van Driver',
      revenue:'00.74',
      color:'clr-yellow'
    },
    {
      id:6,
      img:'assets/img/seller/seller-6.jpg',
      name:'Gordon Norman',
      revenue:'00.78',
      color:'clr-pink'
    },
  ]*/

  sellersData: any[] = [];

  constructor(private readonly providersService: ProvidersService) {
    this.providersService.getTopProviders().subscribe((data) => {
      console.log('data', data);
      data.providers.forEach((provider: any) => {
        this.sellersData.push({
          id: provider._id,
          img: provider.pic,
          name: provider.username,
          revenue: provider.revenue,
          color: ''
        })
      });
    })
  }

  ngOnInit(): void {
  }

}
