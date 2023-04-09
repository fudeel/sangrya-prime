import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-engage',
  templateUrl: './engage.component.html',
  styleUrls: ['./engage.component.scss']
})
export class EngageComponent implements OnInit {

  items = [
    {
      label: 'Mode',
      routerLink: 'mode'
    },
    {
      label: 'Personal',
      routerLink: 'personal'
    },
    {
      label: 'Animal',
      routerLink: 'animal'
    },
    {
      label: 'Booking',
      routerLink: 'booking'
    },
    {
      label: 'Payment',
      routerLink: 'payment'
    },
    {
      label: 'Confirmation',
      routerLink: 'confirmation'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
