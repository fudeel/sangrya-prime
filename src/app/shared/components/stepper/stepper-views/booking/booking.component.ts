import {Component, OnDestroy, OnInit} from '@angular/core';
import {StepperService} from "../../stepper.service";
import {Router} from "@angular/router";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit, OnDestroy {

  rangeDates: Date[] = [];

  bookingForm = this.fb.group({
    dates: ['', Validators.required],
  });

  minDate: Date = new Date();
  today = new Date();
  maxDate: Date = new Date(this.today.setDate(this.today.getDate() + 45));

  constructor(private readonly stepperService: StepperService, private readonly router: Router, private fb: FormBuilder) {
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

}
