import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {filter, map} from "rxjs";

@Component({
  selector: 'app-engage',
  templateUrl: './engage.component.html',
  styleUrls: ['./engage.component.scss']
})
export class EngageComponent implements OnInit {

  items = [
    {
      label: 'Mode',
      routerLink: 'mode'
    },
    {
      label: 'Personal',
      routerLink: 'personal'
    },
    {
      label: 'Animal',
      routerLink: 'animal'
    },
    {
      label: 'Booking',
      routerLink: 'booking'
    },
    {
      label: 'Payment',
      routerLink: 'payment'
    },
    {
      label: 'Confirmation',
      routerLink: 'confirmation'
    }
  ];

  currentStep: string = 'mode';

  constructor(private route: ActivatedRoute, private router: Router) {
    router.events
      .pipe(
        filter((event: any) => event instanceof NavigationEnd),
        map((event: NavigationEnd) => event.url)
      )
      .subscribe(url => {
        const lastUrlSegment = url.split('?')[0].split('/').pop() || '';

        this.currentStep = lastUrlSegment.toString();
      });
  }

  ngOnInit(): void {
  }

  onNext() {
    this.router.navigate(([ this.currentStep === 'mode' ? 'personal' :
      this.currentStep === 'personal' ? 'animal' :
        this.currentStep === 'animal' ? 'booking' :
          this.currentStep === 'booking' ? 'payment' :
            this.currentStep === 'payment' ? 'confirmation' : 'mode' ]), { relativeTo: this.route });
  }

  handleDisable() {
    if (this.currentStep === 'mode') {
      return false;
    } else {
      return true;
    }
  }

  onBack() {
    this.router.navigate(([ this.currentStep === 'mode' ? '../../../private' :
      this.currentStep === 'personal' ? 'mode' :
        this.currentStep === 'animal' ? 'personal' :
          this.currentStep === 'booking' ? 'animal' :
            this.currentStep === 'payment' ? 'booking' : 'payment' ]), { relativeTo: this.route });
  }
}
