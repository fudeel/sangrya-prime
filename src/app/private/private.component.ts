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

  petsitters: any[] = []

  username = 'Not logged in';

  constructor(private readonly auth: AuthService,
              private readonly providersService: ProvidersService,
              private readonly userService: UserService, private readonly router: Router) {
    this.auth.user$.subscribe(user => {
      if (user) {
        this.username = user['username'];
        /*this.userService.createUserOnDb().subscribe(res => {
          if (res?.user) {
            this.userService.updateUser(res.user);
          }
        })*/
        this.userService.getUserInformationFromDb().subscribe(res => {
          if (res?.user) {
            this.userService.updateUser(res.user);
          }
        });
      } else {
        this.username = 'Not logged in';
      }
    });
  }

  ngOnInit(): void {
    this.getProviders();
  }

  getProviders() {
    this.providersService.getProviders().subscribe(res => {
      if (res?.providers) {
        this.petsitters = res.providers;
      }
    });
  }

  onProviderSelection($event: string) {
    this.router.navigate(['private/engage/' + $event]);
  }

}
