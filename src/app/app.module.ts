import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {
  MatCardModule,
  MatInputModule,
  MatPaginatorModule, 
  MatSortModule, 
  MatTableModule,
  MatToolbarModule } from '@angular/material';
import { AppComponent } from './app.component';
import { FlyersComponent } from './components/flyers/flyers.component';
import { FlyerDetailComponent } from './components/flyer-detail/flyer-detail.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    FlyersComponent,
    FlyerDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatPaginatorModule, 
    MatSortModule, 
    MatTableModule,
    MatToolbarModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
