import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {

  items = [
    {
      label: 'Personal',
      routerLink: 'personal'
    },
    {
      label: 'Seat',
      routerLink: 'seat'
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

  ngOnInit(): void {
  }

}
