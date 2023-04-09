import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-provider-card',
  templateUrl: './provider-card.component.html',
  styleUrls: ['./provider-card.component.scss'],
  encapsulation: ViewEncapsulation.None // or ViewEncapsulation.ShadowDom
})
export class ProviderCardComponent implements OnInit {

  @Input() provider: any;
  @Input() inCancellable: boolean = false;


  @Output() selectProvider: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onProviderSelection() {
    this.selectProvider.emit(this.provider._id);
  }

}
