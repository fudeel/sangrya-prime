import {Component, OnDestroy, OnInit} from '@angular/core';
import {StepperService} from "../../stepper.service";
import {Router} from "@angular/router";
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Subscription} from "rxjs";
import {Location} from "@angular/common";

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit, OnDestroy {

  rangeDates: Date[] = [];

  bookingForm: FormGroup | undefined;

  datesSubscription: Subscription | undefined;

  minDate: Date = new Date();
  today = new Date();
  maxDate: Date = new Date(this.today.setDate(this.today.getDate() + 45));

  times = ['once', 'twice', 'three-times', 'four-times'];
  hoursPerTime = ['1', '2', '3', '4', '5', '6', '7', '8'];


  constructor(private readonly stepperService: StepperService, private readonly router: Router, private fb: FormBuilder, private readonly location: Location) {
  }

  ngOnInit(): void {
    this.bookingForm = new FormGroup({
      dates: new FormControl<Date | null>(null)
    });
  }

  onBack() {
    this.location.back();
  }

  onNext() {
    this.router.navigate([`private/engage/payment`], { queryParamsHandling: 'merge' });
  }

  ngOnDestroy(): void {
  }

}
