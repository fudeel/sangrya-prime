import { Component } from '@angular/core';
import {PetSitterSelection, StepperChoices, StepperService} from "../../stepper.service";

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.scss']
})
export class AnimalComponent {

  choices: StepperChoices | undefined;

  constructor(private readonly stepperService: StepperService) {
    if (localStorage.getItem('stepper-choices')) {
      this.choices = JSON.parse(<string>localStorage.getItem('stepper-choices'));
    } else {
      this.stepperService.stepperChoices$.subscribe((data: StepperChoices) => {
        this.choices = data;
      });
    }
  }

  onAnimalChange() {

  }
}
