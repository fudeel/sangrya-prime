import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StepperService {

  private stepperChoices = new BehaviorSubject<StepperChoices>({
    mode: null,
    personal: null,
    animal: null,
    booking: null,
    payment: null,
    confirmation: null
  });
  stepperChoices$ = this.stepperChoices.asObservable();

  constructor() { }

  updateStepperChoices(stepperChoices: StepperChoices) {
    console.log(stepperChoices)
    this.stepperChoices.next(stepperChoices);
  }
}


export interface StepperChoices {
  mode?: 'in-home' | 'in-pet-sitter' | null | undefined;
  personal?: {
    firstname?: string;
    lastname?: string;
    phoneNumber?: string;
    countryAddress?: string | null;
    cityAddress?: string | null;
    streetAddress?: string | null;
    zipCode?: string | null;
  } | null | undefined;
  animal?: {
    name: string;
    type: string;
    size: number;
  } | null | undefined,
  booking?: {
    startDate: Date;
    endDate: Date;
    numberOfTimesPerDay: number;
    selectedTimeSlots: string[];
  } | null | undefined,
  payment?: {
    cardNumber: string;
    cardHolderName: string;
    expirationDate: string;
    cvv: string;
  } | null | undefined,
  confirmation?: {
    confirmationCode: string;
  } | null | undefined
}
