import { Component } from '@angular/core';
import {PetSitterSelection, StepperChoices, StepperService} from "../../stepper.service";
import {FormArray, FormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.scss']
})
export class AnimalComponent {

  animalForm = this.fb.group({
    animals: this.fb.array([])
  });

  constructor(private readonly stepperService: StepperService, private fb: FormBuilder, private readonly router: Router, private readonly location: Location) {

  }

  get animalControls() {
    return (this.animalForm.get('animals') as FormArray).controls;
  }

  addAnimal() {
    const animal = this.fb.group({
      race: ['', Validators.required],
      size: ['', Validators.required]
    });

    (this.animalForm.get('animals') as FormArray).push(animal);
  }


  removeAnimal(index: number) {
    (this.animalForm.get('animals') as FormArray).removeAt(index);
  }

  onBack() {
    this.location.back();
  }

  onNext() {
    this.stepperService.updateEngageForm(null, null, this.animalForm.controls.animals.value)
    this.router.navigate([`private/engage/booking`], { queryParamsHandling: 'merge' });
  }

}
