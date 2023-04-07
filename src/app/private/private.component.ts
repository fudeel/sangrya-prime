import {Component, OnInit} from '@angular/core';
import {AuthService} from "@auth0/auth0-angular";
import {PETSITTERSMOCK} from "../shared/mocks/petsitters";
import {ProvidersService} from "../shared/services/providers.service";

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.scss']
})
export class PrivateComponent implements OnInit{

  petsitters = PETSITTERSMOCK

  constructor(private readonly auth: AuthService, private readonly providersService: ProvidersService) {
    auth.user$.subscribe(user => console.log(user));
  }

  ngOnInit(): void {
    this.getProviders();
  }

  getProviders() {
    this.providersService.getProviders().subscribe(providers => console.log(providers));
  }

}
