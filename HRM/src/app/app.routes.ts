import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: 'account', loadChildren: () => import("./account/account-routing.module").then(m=>m.AccountRoutingModule)},
    
    
];
