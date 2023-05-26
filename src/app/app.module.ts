import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSidenavModule } from '@angular/material/sidenav'; // Import MatSidenavModule
import { MatIconModule } from '@angular/material/icon'; // Import MatIconModule

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { GoogleMapsModule } from '@angular/google-maps';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule,
    GoogleMapsModule,
    MatSidenavModule, // Add MatSidenavModule here
    MatIconModule, // Add MatIconModule here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
