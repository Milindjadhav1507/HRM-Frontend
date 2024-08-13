import { Component } from '@angular/core';
import {
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet,
} from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from '../employee/employee.component';
import { debug } from 'console';
import { StaffComponent } from '../staff/staff.component';
import { PayrollComponent } from '../payroll/payroll.component';
import { SettingsComponent } from '../settings/settings.component';
import { MoreComponent } from '../more/more.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    CommonModule,
    RouterOutlet,
    DashboardComponent,
    StaffComponent,
    EmployeeComponent,
    PayrollComponent,
    SettingsComponent,
    MoreComponent
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  
  showDashboard = false; // Initially show the dashboard
  showEmployee = false;
  showStaff= false;
  showPayroll= false;
  showSettings= false;
  showMore= false;
  
  showMoreComponent() {
    this.showMore= true;
    this.showStaff= false;
    this.showEmployee = false;
    this.showDashboard = false;
    this.showPayroll= false;
    this.showSettings= false;
  }

  showStaffComponent() {
    this.showStaff= true;
    this.showEmployee = false;
    this.showDashboard = false;
    this.showPayroll= false;
    this.showSettings= false;
    this.showMore= false;
  }
  showSettingsComponent() {
    this.showSettings= true;
    this.showEmployee = false;
    this.showDashboard = false;
    this.showStaff= false;
    this.showPayroll= false;
    this.showMore= false;
  }
  showPayrollComponent() {
    this.showPayroll= true;
    this.showEmployee = false;
    this.showDashboard = false;
    this.showStaff= false;
    this.showSettings= false;
    this.showMore= false;
  }


  showDashboardComponent() {
    this.showDashboard = true;
    this.showEmployee = false;
    this.showStaff= false;
    this.showPayroll= false;
    this.showSettings= false;
    this.showMore= false;
  }

  showEmployeeComponent() {
    this.showEmployee = true;
    this.showDashboard = false;
    this.showStaff= false;
    this.showPayroll= false;
    this.showSettings= false;
    this.showMore= false;
  }
}
