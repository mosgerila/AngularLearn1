import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';


import 'hammerjs';

import { AppComponent } from './app.component';
import { ItemsComponent } from './items/items.component';
import { ServiceComponent } from './service/service.component';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CalItemComponent } from './cal-item/cal-item.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

import {OperationService} from './Services2/operation.service';
import {AppRoutingModule} from './app-routing/app-routing.module'



@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    ServiceComponent,
    HeaderComponent,
    FooterComponent,
    CalendarComponent,
    CalItemComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
  
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    AppRoutingModule

  ],
  providers: [OperationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
