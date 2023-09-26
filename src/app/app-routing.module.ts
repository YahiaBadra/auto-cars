import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LscarComponent } from './lscar/lscar.component';
import { CarBreakdownComponent } from './car-breakdown/car-breakdown.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'cars',
    component: LscarComponent,
  },
  {
    path: 'breakdown',
    component:CarBreakdownComponent,
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
