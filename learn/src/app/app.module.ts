import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';


import 'hammerjs';

import { AppComponent } from './app.component';
import { ItemsComponent } from './items/items.component';
import { ServiceComponent } from './service/service.component';
import {OperationService} from './Services2/operation.service'


@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    ServiceComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule

  ],
  providers: [OperationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
