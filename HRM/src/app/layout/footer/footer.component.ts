import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  isNavbarHidden: boolean = false;

  constructor(private router:Router){
    this.router.events.subscribe(() => {
      this.isNavbarHidden = this.router.url.includes('login') || this.router.url.includes('register');
    });
  }
}
