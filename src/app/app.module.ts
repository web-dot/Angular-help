import { LandingpageNavbarComponent } from './landingpage-navbar/landingpage-navbar.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { LandingpageNavbarModule } from './landingpage-navbar/landingpage-navbar.module';
import { OrdersComponent } from './orders/orders.component';
import { DialogComponent } from './dialog/dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MultiplierPipe } from './multiplier.pipe';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { SizerComponent } from './sizer/sizer.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { DirectivesComponent } from './directives/directives.component';
import { NgmoduleComponent } from './ngmodule/ngmodule.component';
import { AttrClassComponent } from './attr-class/attr-class.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingpageNavbarComponent,
    OrdersComponent,
    DialogComponent,
    MultiplierPipe,
    HomeComponent,
    TwoWayBindingComponent,
    SizerComponent,
    InputOutputComponent,
    DirectivesComponent,
    NgmoduleComponent,
    AttrClassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    LandingpageNavbarModule,
    MatDialogModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
