import { Routes } from '@angular/router';
import { SidebarComponent } from './pages/sidebar/sidebar.component';

export const routes: Routes = [
    {path: 'account', loadChildren: () => import("./account/account-routing.module").then(m=>m.AccountRoutingModule)},
    {path: 'pages', loadChildren: () => import("./pages/pages-routing.module").then(m=>m.PagesRoutingModule)},
    {path: 'sidebar', component: SidebarComponent}
    
    
];
