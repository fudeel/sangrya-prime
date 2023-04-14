import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {PetSitterSelection, StepperChoices, StepperService} from "../../stepper.service";
import {FormArray, FormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {Location} from "@angular/common";
import {Subscription, take} from "rxjs";

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.scss']
})
export class AnimalComponent implements OnInit, OnDestroy {

  animalForm = this.fb.group({
    animals: this.fb.array([])
  });

  showAddAnimal = false;
  animalSub: Subscription | undefined;
  animals: any[] = [];


  constructor(private readonly stepperService: StepperService, private fb: FormBuilder, private readonly router: Router, private readonly location: Location) {

    this.stepperService.engageForm$.subscribe((e) => {
      this.animals = e.controls?.['animalForm'].value.animals;
    });

  }

  ngOnInit(): void {
    this.stepperService.engageForm$.pipe(take(1)).subscribe((e) => {
      this.animals = e.controls?.['animalForm'].value.animals;
      const animalsArray = this.animalForm.get('animals') as FormArray;
      animalsArray.clear();
      this.animals.forEach((a: any) => {
        animalsArray.push(this.fb.group({ ...a }));
      });
    });
  }

  get animalControls() {
    return (this.animalForm.get('animals') as FormArray).controls;
  }

  addAnimal() {
    this.showAddAnimal = true;
  }


  removeAnimal(index: number) {
    this.animals.splice(index, 1);
    (this.animalForm.get('animals') as FormArray).removeAt(index);
    this.stepperService.updateEngageForm(null, null, this.animalForm.controls.animals.value);
  }

  onBack() {
    this.location.back();
  }

  onNext() {
    this.router.navigate([`private/engage/booking`], { queryParamsHandling: 'merge' });
  }

  confirmAddAnimal(race: string, size: string) {
    const newAnimal = { race, size };
    this.animals.push(newAnimal);
    (this.animalForm.get('animals') as FormArray).push(this.fb.group(newAnimal));
    this.stepperService.updateEngageForm(null, null, this.animalForm.controls.animals.value);
    this.showAddAnimal = false;
  }

  ngOnDestroy(): void {
    this.animalSub?.unsubscribe();
  }
}
