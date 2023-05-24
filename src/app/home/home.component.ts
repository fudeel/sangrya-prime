import {Component, OnInit} from '@angular/core';
import {ProvidersService} from "../shared/services/providers.service";
import {ItemsService} from "../shared/services/items.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  isTopSellersLoading = true;
  topSellers: any[] = [];
  constructor(private readonly providersService: ProvidersService,
              private readonly itemsService: ItemsService,
              private router : Router) {
  }

  ngOnInit(): void {
    this.providersService.getTopProviders().subscribe((res: any) => {
      this.providersService.updateTopProviders(res.providers);
      this.isTopSellersLoading = false;
      this.topSellers = res.providers;

    });

    this.itemsService.getTopItems().subscribe((res: any) => {
      this.itemsService.updateTopItems(res);
    });
  }

  protected readonly top = top;
}
