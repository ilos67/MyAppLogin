import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileRoutingModule } from './profile.routing';

import { DetailsComponent } from './details.component';
import { LayoutComponent } from './layout.component';
import { UpdateComponent } from './update.component';



@NgModule({
  declarations: [DetailsComponent, LayoutComponent, UpdateComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
