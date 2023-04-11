import {Component, EventEmitter, Output} from '@angular/core';
import {StepperChoices, StepperService} from "../../stepper.service";

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent {

  @Output() modeSelectionChanges: EventEmitter<string> = new EventEmitter<string>();

  firstname: string = '';
  lastname: string = '';
  phoneNumber: string = '';
  countryAddress: string | undefined = '';
  cityAddress: string | undefined = '';
  streetAddress: string | undefined = '';
  zipCode: string | undefined = '';
  choices: StepperChoices | undefined;

  constructor(private readonly stepperService: StepperService) {
    this.stepperService.stepperChoices$.subscribe((data: StepperChoices) => {
      this.choices = data;
    });
  }

  onPersonalFormChanges($event: string, field: 'firstname' | 'lastname' | 'phoneNumber' | 'countryAddress' | 'cityAddress' | 'streetAddress' | 'zipCode') {
    this.stepperService.updateStepperChoices({
      mode: this.choices?.mode,
      personal: {
        firstname: field === 'firstname' ? $event : this.choices?.personal?.firstname,
        lastname: field === 'lastname' ? $event : this.choices?.personal?.lastname,
        phoneNumber: field === 'phoneNumber' ? $event : this.choices?.personal?.phoneNumber,
        countryAddress: field === 'countryAddress' ? $event : this.choices?.personal?.countryAddress,
        cityAddress: field === 'cityAddress' ? $event : this.choices?.personal?.cityAddress,
        streetAddress: field === 'streetAddress' ? $event : this.choices?.personal?.streetAddress,
        zipCode: field === 'zipCode' ? $event : this.choices?.personal?.zipCode
      },
      animal: this.choices?.animal,
      booking: this.choices?.booking,
      payment: this.choices?.payment,
      confirmation: this.choices?.confirmation
    })
  }

}
