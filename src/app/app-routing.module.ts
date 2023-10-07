import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LscarComponent } from './lscar/lscar.component';
import { CarBreakdownComponent } from './car-breakdown/car-breakdown.component';
import { RegisterComponent } from './register/register.component';
import { BreakdownlistComponent } from './breakdownlist/breakdownlist.component';
import { RepairedComponent } from './repaired/repaired.component';
import { FuelComponent } from './fuel/fuel.component';
import { DestinationComponent } from './destination/destination.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  // {
  //   path: '',
  //   pathMatch: 'full',
  //   redirectTo: 'home',
  // },
  {
    path: 'cars',
    component: LscarComponent,
  },
  {
    path: 'breakdown',
    component: CarBreakdownComponent,
  },
  {
    path: 'breakdownList',
    component: BreakdownlistComponent,
  },
  {
    path: 'repaired',
    component: RepairedComponent,
  },
  {
    path: 'fuel',
    component: FuelComponent,
  },
  {
    path: 'destination',
    component: DestinationComponent,
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
  },

  {
    path: '**',
    redirectTo: 'not-found',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
