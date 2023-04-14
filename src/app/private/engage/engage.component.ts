import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {filter, map} from "rxjs";
import {StepperChoices, StepperService} from "../../shared/components/stepper/stepper.service";
import {FormBuilder, Validators} from "@angular/forms";

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

  constructor(private route: ActivatedRoute, private router: Router, private readonly stepperService: StepperService) {
  }

  ngOnInit(): void {
  }
}
