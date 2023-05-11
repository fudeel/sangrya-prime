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
  firstTimeSlot: string = "";
  secondTimeSlot: string = "";
  thirdTimeSlot: string = "";


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
        selectedTimeSlots: [null, null, null],
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
    this.bookingForm.get('dates')?.value.forEach((booking: Booking) => {
      bookings.push(booking);
    });
    const selectedDay = bookings.find((booking: Booking) => {
      return booking.date === d.date;
    });

    selectedDay.selectedNumberOfTimes = $event.value;
    this.bookingForm.get('dates')?.setValue([]);
    bookings.forEach((booking: Booking) => {
      this.bookingForm.get('dates')?.value.push(booking);
    });

    if ($event.value === 'once') {
      this.firstTimeSlot = '';
      this.secondTimeSlot = '';
      this.thirdTimeSlot = '';
    } if ($event.value === 'twice') {
      this.firstTimeSlot = '';
      this.secondTimeSlot = '';
      this.thirdTimeSlot = '';
    } if ($event.value === 'thrice') {
      this.firstTimeSlot = '';
      this.secondTimeSlot = '';
      this.thirdTimeSlot = '';
    }
  }


  ngOnDestroy(): void {
  }

  generateTimeSlot(selected: string, d: any) {
    const timeSlots = ['morning', 'afternoon', 'evening'];

    if (d.selectedTimeSlots.includes(selected)) {
      return timeSlots.filter(slot => slot !== selected);
    } else {
      return timeSlots;
    }
  }

  onSelectedTimeSlotChange($event: any, d: any, i: number) {
    console.table({
      $event,
      d,
      i
    })
    const bookings: any[] = [];
    this.bookingForm.get('dates')?.value.forEach((booking: Booking) => {
      bookings.push(booking);
    });
    const selectedDay = bookings.find((booking: Booking) => {
      return booking.date === d.date;
    });

    selectedDay.selectedTimeSlots[i] = $event;

    this.bookingForm.get('dates')?.setValue([]);
    bookings.forEach((booking: Booking) => {
      this.bookingForm.get('dates')?.value.push(booking);
    });
  }
}
interface Booking {
  date: Date;
  selectedTimeSlots?: (string | null)[];
  selectedNumberOfTimes: string;
}
