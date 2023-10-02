import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LscarComponent } from './lscar/lscar.component';
import { CarBreakdownComponent } from './car-breakdown/car-breakdown.component';
import { RegisterComponent } from './register/register.component';
import { BreakdownlistComponent } from './breakdownlist/breakdownlist.component';
import { RepairedComponent } from './repaired/repaired.component';
import { FuelComponent } from './fuel/fuel.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    NavbarComponent,
    MenuComponent,
    LoginComponent,
    NotFoundComponent,
    LscarComponent,
    CarBreakdownComponent,
    RegisterComponent,
    BreakdownlistComponent,
    RepairedComponent,
    FuelComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
