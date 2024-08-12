import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SidebarComponent } from '../../pages/sidebar/sidebar.component';
import { PagesModule } from '../../pages/pages.module';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink,SidebarComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
