import {Component, EventEmitter, Output} from '@angular/core';
import {PetSitterSelection, StepperChoices, StepperService} from "../../stepper.service";
import {Router} from "@angular/router";
import {Location} from "@angular/common";

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
  constructor(private readonly stepperService: StepperService, private readonly router: Router, private readonly location: Location) {
  }

  onPersonalFormChanges($event: string, field: 'firstname' | 'lastname' | 'phoneNumber' | 'countryAddress' | 'cityAddress' | 'streetAddress' | 'zipCode') {
  }

  onBack() {
    this.location.back();
  }

  onNext() {
    this.router.navigate([`private/engage/animal`], { queryParamsHandling: 'merge' });

  }
}
