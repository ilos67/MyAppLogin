import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { OverviewComponent } from './overview.component';
import { SubnavComponent } from './subnav.component';

export  const AdminRoutes: Routes = [
    { path: '', component: SubnavComponent, outlet: 'subnav' },
    {
        path: '', component: LayoutComponent,
        children: [
            { path: '', component: OverviewComponent },
            { path: 'accounts', loadChildren:() => import('./accounts/accounts.module').then(x => x.AccountsModule) }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(AdminRoutes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }
