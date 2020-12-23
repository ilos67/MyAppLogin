import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { OverviewComponent } from './overview.component';
import { SubnavComponent } from './subnav.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminRoutes } from './admin-routing.module'
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [LayoutComponent, OverviewComponent, SubnavComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(AdminRoutes)
  ]
})
export class AdminModule { }
