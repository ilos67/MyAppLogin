import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent }   from './main/main.component';
import { AuthGuard } from './core/guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { Role } from './_models/role';

const appRoutes: Routes = [
   {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full',
   },
   {	
      path: 'account',
      loadChildren: () => import('./session/session.module').then(m => m.SessionModule)
   },
   {
      path: '',
      component: MainComponent,
      canActivate: [AuthGuard],
      runGuardsAndResolvers: 'always',
      children: [
         {
            path: '',
            component: HomeComponent
         },
         {  path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)},
         {  path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule), data: { roles: [Role.Admin]}},
         { path: 'profile', loadChildren:() => import('./profile/profile.module').then(x => x.ProfileModule) },
      ]
   },
   {
      path: '**',
      redirectTo: 'home'
   }
]

@NgModule({
  	imports: [RouterModule.forRoot(appRoutes)],
 	exports: [RouterModule],
  	providers: []
})
export class RoutingModule { }
