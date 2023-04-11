import {Component, EventEmitter, Output} from '@angular/core';
import {PetSitterSelection, StepperChoices, StepperService} from "../../stepper.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-mode',
  templateUrl: './mode.component.html',
  styleUrls: ['./mode.component.scss']
})
export class ModeComponent {

  @Output() modeSelectionChanges: EventEmitter<string> = new EventEmitter<string>();

  modeChoice: 'in-home' | 'in-pet-sitter' | null | undefined = null;
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

    if (localStorage.getItem('pet-sitter-selection')) {
      this.petsitterId = JSON.parse(<string>localStorage.getItem('pet-sitter-selection'))['_id'];
    } else {
      this.stepperService.selectedPetSitter$.subscribe((data: PetSitterSelection) => {
        this.petsitterId = data._id;
      });
    }

  }


  onModelSelectionChange($event: 'in-home' | 'in-pet-sitter' | null | undefined) {
    this.stepperService.updateStepperChoices({
      mode: $event,
      personal: {
        firstname: this.choices?.personal?.firstname,
        lastname: this.choices?.personal?.lastname,
        phoneNumber: this.choices?.personal?.phoneNumber,
        countryAddress: this.choices?.personal?.countryAddress,
        cityAddress: this.choices?.personal?.cityAddress,
        streetAddress: this.choices?.personal?.streetAddress,
        zipCode: this.choices?.personal?.zipCode

      },
      animal: this.choices?.animal,
      booking: this.choices?.booking,
      payment: this.choices?.payment,
      confirmation: this.choices?.confirmation
    })
  }

  onBack() {
    this.router.navigate([`private`]);
  }

  onNext() {
    this.router.navigate([`private/engage/${this.petsitterId}/personal`]);
  }
}
