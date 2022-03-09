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
  weatherType = {};
  windClass = {};
  precipitationClass = {};

  ngOnInit(): void {
    this.WeatherService.get(Constants.API_VISEU_WEATHER_ENDPOINT).subscribe((res: any) => {
      res.data.map((entry: any) =>{
        this.weather.push(entry);
      });
    });

    this.WeatherService.get(Constants.API_WEATHER_TYPE_ENDPOINT).subscribe((res: any) => {
      res.data.map((entry: any) =>{
        this.weatherType[entry.idWeatherType] = entry.descIdWeatherTypePT;
      });
    });

    this.WeatherService.get(Constants.API_WIND_CLASS_ENDPOINT).subscribe((res: any) => {
      res.data.map((entry: any) =>{
        this.windClass[entry.classWindSpeed] = entry.descClassWindSpeedDailyPT;
      });
    });

    this.WeatherService.get(Constants.API_PRECIPITATION_CLASS_ENDPOINT).subscribe((res: any) => {
      res.data.map((entry: any) =>{
        this.precipitationClass[entry.classPrecInt] = entry.descClassPrecIntPT;
      });
    });
  }

}
