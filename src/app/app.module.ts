import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Angular Materials Import //
import { MatCardModule } from "@angular/material/card";
import { WeatherPanelComponent } from './weather-panel/weather-panel.component';
// Angular Materials Import //

@NgModule({
  declarations: [
    AppComponent,
    WeatherPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
