import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {StepperChoices, StepperService} from "./stepper.service";

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {

  @Input() items: any[] = [];

  constructor(private route: ActivatedRoute, private router: Router, private readonly stepperService: StepperService) { }

  currentStep: string = 'mode';

  ngOnInit(): void {
  }
}
