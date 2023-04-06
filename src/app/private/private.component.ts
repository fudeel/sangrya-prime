import { Component } from '@angular/core';
import {AuthService} from "@auth0/auth0-angular";
import {PETSITTERSMOCK} from "../shared/mocks/petsitters";

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.scss']
})
export class PrivateComponent {

  petsitters = PETSITTERSMOCK

  constructor(private readonly auth: AuthService) {
    auth.user$.subscribe(user => console.log(user));
  }

}
