import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { SidebarComponent } from '../../pages/sidebar/sidebar.component';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, SidebarComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit(): void {}

  pageRedirectToAfterLogin() {
    this.router.navigateByUrl('pages/sidebar');
  }
}
