import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingpageNavbarRoutingModule } from './landingpage-navbar-routing.module';
import { LandingpageNavbarComponent } from './landingpage-navbar.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button'


@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    LandingpageNavbarRoutingModule,
    MatMenuModule,
    MatButtonModule
  ]
})
export class LandingpageNavbarModule { }
