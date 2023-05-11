import { Component } from '@angular/core';
import {StoreService} from "../../shared/services/store.service";

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent {

  constructor(private readonly storeService: StoreService) {
    storeService.getStoreInformation().subscribe(res => {
      console.log('res: ', res);
    })
  }
}
