import { Component,HostListener, OnInit,Input } from '@angular/core';
import {AuthService, User} from "@auth0/auth0-angular";
import {Observable} from "rxjs";
import {CartService} from "../../../services/cart.service";
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input () header__transparent : string | undefined;


  user: User | null | undefined = null;

  headerSticky : boolean = false;

  showSidebar : boolean = false;

  isLoadingUser: boolean = true;

  // sticky nav
  @HostListener('window:scroll',['$event']) onscroll () {
    if(window.scrollY > 80){
      this.headerSticky = true
    }
    else{
      this.headerSticky = false
    }
  }

  // handleSidebar
  handleSidebar () {
    this.showSidebar = true;
  }
  handleSidebarClose () {
    this.showSidebar = false;
  }


  constructor(public auth: AuthService, private readonly cartService: CartService, private readonly userService: UserService) {
    userService.user$.subscribe((user) => {
      console.log('user from header component: ', user);
      this.user = user;
      this.isLoadingUser = false;
    });

  }

  ngOnInit(): void {
  }

  onLoginRegister() {
    this.auth.loginWithPopup().subscribe((user) => {
      window.location.reload();
      console.log('user after login popup: ', user);

      this.userService.getUserInformationFromDb().subscribe((user) => {
        console.log('user after getUserInformationFromDb: ', user);
        this.userService.updateUser(user, false);
      });
    });
  }

  onLogout() {
    this.cartService.emptyCart();
    localStorage.clear();
    this.auth.logout();
  }
}
