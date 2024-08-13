import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeComponent } from './employee/employee.component';
import { StaffComponent } from './staff/staff.component';
import { PayrollComponent } from './payroll/payroll.component';
import { SettingsComponent } from './settings/settings.component';
import { MoreComponent } from './more/more.component';

const routes: Routes = [
  { path: 'sidebar', component: SidebarComponent },
  { path: 'dashboard', component: DashboardComponent, title: 'Dashboard' },
  { path: 'employee', component: EmployeeComponent, title: 'Employee' },
  { path: 'staff', component: StaffComponent, title: 'Staff' },
  { path: 'payroll', component: PayrollComponent, title: 'Payroll' },
  { path: 'settings', component: SettingsComponent, title: 'Settings' },
  { path: 'more', component: MoreComponent, title: 'More' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
