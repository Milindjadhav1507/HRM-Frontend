import { Routes } from '@angular/router';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [
    {path: 'account', loadChildren: () => import("./account/account-routing.module").then(m=>m.AccountRoutingModule)},
    {path: 'pages', loadChildren: () => import("./pages/pages-routing.module").then(m=>m.PagesRoutingModule)},
    {path:'dashboard',component:DashboardComponent},
    {path: '', component: SidebarComponent},
    
    
    
];
