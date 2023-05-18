import {Component, OnInit} from '@angular/core';
import {StoreService} from "../../shared/services/store.service";

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  sellingItems = [];

  constructor(private readonly storeService: StoreService) {
    storeService.getStoreInformation().subscribe(res => {
      this.sellingItems = res.user.sellingItems;
    })
  }

  ngOnInit(): void {

  }
}
