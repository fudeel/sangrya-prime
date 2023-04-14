import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class StepperService {

  private selectedPetSitter = new BehaviorSubject<any>(null);
  selectedPetSitter$ = this.selectedPetSitter.asObservable();

  engageForm = new BehaviorSubject<FormGroup>(
    this.fb.group({
      modeForm: this.fb.group({
        choice: ['', Validators.required]
      }),
      personalInformationForm: this.fb.group({
        firstname: ['', Validators.required],
        lastname: ['', Validators.required],
        phoneNumber: ['', Validators.required],
        countryAddress: ['', Validators.required],
        cityAddress: ['', Validators.required],
        streetAddress: ['', Validators.required],
        zipCode: ['', Validators.required]
      }),
      animalForm: this.fb.group({
        animals: this.fb.array([])
      }),
    })
  );

  engageForm$ = this.engageForm.asObservable();

  constructor(private fb: FormBuilder) { }

  updateSelectedPetSitter(petSitter: PetSitterSelection) {
    this.selectedPetSitter.next(petSitter);
    localStorage.setItem('selected-pet-sitter', JSON.stringify(petSitter));
  }

  updateEngageForm(modeFormValue: any, personalInformationFormValue: any, animalFormValue: any) {
    const currentEngageForm = this.engageForm.getValue();
    if (modeFormValue) {
      currentEngageForm.get('modeForm')?.setValue(modeFormValue)
    }

    if (personalInformationFormValue) {
      currentEngageForm.get('personalInformationForm')?.setValue(personalInformationFormValue);
    }

    if (animalFormValue && Array.isArray(animalFormValue)) {
      const animalsArray = currentEngageForm.get('animalForm.animals') as FormArray;
      animalsArray.clear();
      animalFormValue.forEach((a: any) => {
        animalsArray.push(this.fb.group({ ...a }));
      });
    }

    this.engageForm.next(currentEngageForm);
  }
}

export interface PetSitterSelection {
  _id: string;
  userId: string;
  petsitting: any[];
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
