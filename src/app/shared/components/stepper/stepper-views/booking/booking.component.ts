import {Component, OnDestroy, OnInit} from '@angular/core';
import {StepperService} from "../../stepper.service";
import {Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
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
  numberOfTimes: string[] = ['once', 'twice', 'thrice'];
  defaultTimeSlots: TimeSlot[] = [
    {label: 'morning'},
    {label: 'afternoon'},
    {label: 'evening'}
  ]


  constructor(private readonly stepperService: StepperService, private readonly router: Router, private fb: FormBuilder, private readonly location: Location) {
  }

  ngOnInit(): void {
  }

  onDateSelect(event: Date[]) {
    // clear bookingForm.dates array before pushing new dates
    this.bookingForm.get('dates')?.setValue([]);

    const bookings: Booking[] = [];
    event.forEach((date: Date) => {
      const newBooking: Booking = {
        date: date,
        selectedTimeSlots: [],
        selectedNumberOfTimes: ''
      };
      bookings.push(newBooking);
    });

    // order dates in bookings array by date property
    bookings.sort((a: Booking, b: Booking) => {
      return a.date.getTime() - b.date.getTime();
    });

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



  onNumberOfTimesSelection($event: any, d: any) {

    const bookings: any[] = [];
    // insert all bookingForm.dates inside bookings array

    this.bookingForm.get('dates')?.value.forEach((booking: Booking) => {
      bookings.push(booking);
    });

    // from bookings array get only the element where the property date equals d
    const selectedDay = bookings.find((booking: Booking) => {
      return booking.date === d.date;
    });

    // update the selectedNumberOfTimes property of the selectedDay object
    selectedDay.selectedNumberOfTimes = $event.value;

    // update the bookingForm.dates array element by pushing each element in bookings array
    this.bookingForm.get('dates')?.setValue([]);
    bookings.forEach((booking: Booking) => {
      this.bookingForm.get('dates')?.value.push(booking);
    });
  }


  updateNumberOfTimes(event: any, date: Date) {

    // get the selected day, and change its object information based on the $event, that rappresents the number of times selected.
    //  update the this.calendar array element and the bookingForm.dates array element
    const selectedDay = this.bookingForm.get('dates')?.value.find((booking: Booking) => {
      return booking.date === date;
    });
    console.log('selected element from form: ', selectedDay);

  }


  ngOnDestroy(): void {
  }
}
interface Booking {
  date: Date;
  selectedTimeSlots?: TimeSlot[];
  selectedNumberOfTimes: string;
}

interface TimeSlot {
  label: 'morning' | 'afternoon' | 'evening';
}
