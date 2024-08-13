import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  isNavbarHidden: boolean = false;
  isNavbarHidden2: boolean = true;
  constructor(private router:Router){
    this.router.events.subscribe(() => {
      this.isNavbarHidden = this.router.url !== '/login' && this.router.url !== '/register';
      this.isNavbarHidden2 = this.router.url.includes('login') || this.router.url.includes('register');
    });
  }

}
