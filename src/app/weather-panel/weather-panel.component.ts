import { Component, OnInit } from '@angular/core';

import{ Constants } from '../constants';
import { WeatherApiHandlerService } from '../weather-api-handler.service'

// Import Interfaces //
//import { WeatherObject } from '../weather-object';
// Import Interfaces //

@Component({
  selector: 'app-weather-panel',
  templateUrl: './weather-panel.component.html',
  styleUrls: ['./weather-panel.component.scss']
})
export class WeatherPanelComponent implements OnInit {



  constructor(private WeatherService: WeatherApiHandlerService) { }

  weatherData: any;
  hello = "Hello"

  weather: any[] = [];

  ngOnInit(): void {
    console.log("init");


    this.WeatherService.get(Constants.API_VISEU_WEATHER_ENDPOINT).subscribe((res: any) => {
      res.map(entry =>{
        this.weather.push(entry);
      });
    });
  }

}
