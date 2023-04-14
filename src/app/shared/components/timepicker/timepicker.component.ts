import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-timepicker',
  templateUrl: './timepicker.component.html',
  styleUrls: ['./timepicker.component.scss']
})
export class TimepickerComponent implements OnInit {
  @Input() selectedTime: string | undefined;
  @Output() timeChanged = new EventEmitter<string>();

  hours: number = 0;
  minutes: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.updateSelectedTime();
  }

  updateSelectedTime(): void {
    this.selectedTime = `${this.hours.toString().padStart(2, '0')}:${this.minutes.toString().padStart(2, '0')}`;
    this.timeChanged.emit(this.selectedTime);
  }

  incrementHours(): void {
    this.hours = (this.hours + 1) % 24;
    this.updateSelectedTime();
  }

  decrementHours(): void {
    this.hours = (this.hours - 1 + 24) % 24;
    this.updateSelectedTime();
  }

  incrementMinutes(): void {
    this.minutes = (this.minutes + 30) % 60;
    this.updateSelectedTime();
  }

  decrementMinutes(): void {
    this.minutes = (this.minutes - 30 + 60) % 60;
    this.updateSelectedTime();
  }
}
