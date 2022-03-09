import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WeatherPanelComponent } from './weather-panel/weather-panel.component'

const routes: Routes = [
  { path: '', component: WeatherPanelComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
