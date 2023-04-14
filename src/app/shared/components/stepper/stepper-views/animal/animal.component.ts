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

  }

  onAnimalChange() {

  }
}
