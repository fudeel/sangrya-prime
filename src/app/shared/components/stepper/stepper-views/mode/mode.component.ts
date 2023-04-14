import {Component, EventEmitter, Output} from '@angular/core';
import {PetSitterSelection, StepperChoices, StepperService} from "../../stepper.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-mode',
  templateUrl: './mode.component.html',
  styleUrls: ['./mode.component.scss']
})
export class ModeComponent {

  choices: StepperChoices | undefined;

  modeForm = this.fb.group({
    choice: ['', Validators.required]
  });


  constructor(private readonly stepperService: StepperService, private readonly router: Router, private fb: FormBuilder) {

  }

  onBack() {
    this.router.navigate([`private`]);
  }

  onNext() {
    this.stepperService.updateEngageForm(this.modeForm.value, null, null)
    this.router.navigate([`private/engage/personal`], { queryParamsHandling: 'merge' });
  }
}
