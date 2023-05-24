import { Component,HostListener, OnInit,Input } from '@angular/core';
import {AuthService, User} from "@auth0/auth0-angular";
import {Observable} from "rxjs";

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


  constructor(public auth: AuthService) {
    auth.user$.subscribe((data) => {
     this.user = data;

     console.log("logged user: ", this.user);
    });
  }

  ngOnInit(): void {
  }

}
