import { AttrClassComponent } from './attr-class/attr-class.component';
import { NgmoduleComponent } from './ngmodule/ngmodule.component';
import { DirectivesComponent } from './directives/directives.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { HomeComponent } from './home/home.component';
import { LandingpageNavbarComponent } from './landingpage-navbar/landingpage-navbar.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from './orders/orders.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'orders', component: OrdersComponent},
  {path: 'two-way', component: TwoWayBindingComponent},
  {path: 'home', component: HomeComponent},
  {path: 'input-output', component: InputOutputComponent},
  {path: 'directives', component: DirectivesComponent},
  {path:'ngmodules', component: NgmoduleComponent},
  {path: 'attrclass', component: AttrClassComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
