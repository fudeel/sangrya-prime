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

  minDate: Date = new Date();
  today = new Date();
  maxDate: Date = new Date(this.today.setDate(this.today.getDate() + 45));
  hoursPerTime = ['1', '2', '3', '4', '5', '6', '7', '8'];

  calendar: Date[] = [];

  bookingForm: FormGroup = new FormGroup({
    dates: new FormControl<Booking[]>([])
  });


  constructor(private readonly stepperService: StepperService, private readonly router: Router, private fb: FormBuilder, private readonly location: Location) {
  }

  ngOnInit(): void {

  }

  onDateSelect(event: Date[]) {

    // clear bookingForm.dates array before pushing new dates
    this.bookingForm.get('dates')?.setValue([]);

    const bookings: Booking[] = [];
    console.log('Event: ', event);
    event.forEach((date: Date) => {
      const newBooking: Booking = {
        date: date,
        timesPerDay: 'once',
        hoursPerTime: 1
      };
      bookings.push(newBooking);
    });

    console.log('Bookings: ', bookings);

    // push each element inside bookings into bookingForm.dates array

    bookings.forEach((booking: Booking) => {
      this.bookingForm.get('dates')?.value.push(booking);
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

  onDateClick($event: any) {
    console.log('Date Clicked: ', $event);
  }
}
interface Booking {
  date: Date;
  timesPerDay: 'once' | 'twice' | 'thrice';
  hoursPerTime: number;
}
