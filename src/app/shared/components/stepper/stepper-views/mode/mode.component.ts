import {Component, EventEmitter, Output} from '@angular/core';
import {StepperService} from "../../stepper.service";

@Component({
  selector: 'app-mode',
  templateUrl: './mode.component.html',
  styleUrls: ['./mode.component.scss']
})
export class ModeComponent {

  @Output() modeSelectionChanges: EventEmitter<string> = new EventEmitter<string>();

  modeChoice: 'in-home' | 'in-pet-sitter' | null = null;

  constructor(private readonly stepperService: StepperService) { }


  onModelSelectionChange($event: 'in-home' | 'in-pet-sitter' | null | undefined) {
    this.stepperService.updateStepperChoices({
      mode: $event,
      personal: null,
      animal: null,
      booking: null,
      payment: null,
      confirmation: null
    })
  }
}
