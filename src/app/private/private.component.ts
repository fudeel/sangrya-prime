import {Component, OnInit} from '@angular/core';
import {AuthService} from "@auth0/auth0-angular";
import {ProvidersService} from "../shared/services/providers.service";
import {UserService} from "../shared/services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.scss']
})
export class PrivateComponent implements OnInit{

  providers: any[] = []

  username = 'Not logged in';

  constructor(private readonly auth: AuthService,
              private readonly providersService: ProvidersService,
              private readonly userService: UserService, private readonly router: Router) {
  }

  ngOnInit(): void {
  }

  onProviderSelection($event: any) {
    this.router.navigate(['private/store'], { queryParams: { providerId: $event._id } });
  }

}
