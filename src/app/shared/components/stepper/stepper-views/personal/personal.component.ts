import {Component, EventEmitter, Output} from '@angular/core';
import {PetSitterSelection, StepperChoices, StepperService} from "../../stepper.service";
import {Router} from "@angular/router";

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
  petsitterId: string | null | undefined = null;
  constructor(private readonly stepperService: StepperService, private readonly router: Router) {
    if (localStorage.getItem('stepper-choices')) {
      this.choices = JSON.parse(<string>localStorage.getItem('stepper-choices'));
    } else {
      this.stepperService.stepperChoices$.subscribe((data: StepperChoices) => {
        this.choices = data;
      });
    }

    if (localStorage.getItem('selected-pet-sitter')) {
      this.petsitterId = JSON.parse(<string>localStorage.getItem('selected-pet-sitter'))['_id'];
    } else {
      this.stepperService.selectedPetSitter$.subscribe((data: PetSitterSelection) => {
        this.petsitterId = data._id;
      });
    }
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

  onBack() {
    this.router.navigate([`private/engage/${this.petsitterId}/mode`]);
  }

  onNext() {
    this.router.navigate([`private/engage/${this.petsitterId}/personal`]);
  }
}
