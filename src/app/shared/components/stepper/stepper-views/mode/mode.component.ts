import {Component, EventEmitter, Output} from '@angular/core';
import {StepperChoices, StepperService} from "../../stepper.service";

@Component({
  selector: 'app-mode',
  templateUrl: './mode.component.html',
  styleUrls: ['./mode.component.scss']
})
export class ModeComponent {

  @Output() modeSelectionChanges: EventEmitter<string> = new EventEmitter<string>();

  modeChoice: 'in-home' | 'in-pet-sitter' | null = null;
  choices: StepperChoices | undefined;
  constructor(private readonly stepperService: StepperService) {
    this.stepperService.stepperChoices$.subscribe((data: StepperChoices) => {
      this.choices = data;
    });
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
}
