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

  public myAngularxQrCode: string = null;

  constructor(private WeatherService: WeatherApiHandlerService) {
    this.myAngularxQrCode = 'Was i a good QRCode? No...';
  }

  weatherData: any;
  hello = "Hello, hi"

  weather: any[] = [];
  weatherType: any = {};
  windClass: any = {};
  precipitationClass: any = {};

  ngOnInit(): void {
    this.WeatherService.get(Constants.API_VISEU_WEATHER_ENDPOINT).subscribe((res: any) => {
      res.data.map((entry: any) =>{
        this.weather.push(entry);
      });
    });

    this.WeatherService.get(Constants.API_WEATHER_TYPE_ENDPOINT).subscribe((res: any) => {
      res.data.map((entry: any) =>{
        this.weatherType[entry.idWeatherType.toString()] = entry.descIdWeatherTypePT;
      });
    });

    this.WeatherService.get(Constants.API_WIND_CLASS_ENDPOINT).subscribe((res: any) => {
      res.data.map((entry: any) =>{
        this.windClass[entry.classWindSpeed.toString()] = entry.descClassWindSpeedDailyPT;
      });
    });

    this.WeatherService.get(Constants.API_PRECIPITATION_CLASS_ENDPOINT).subscribe((res: any) => {
      res.data.map((entry: any) =>{
        this.precipitationClass[entry.classPrecInt.toString()] = entry.descClassPrecIntPT;
      });
    });
  }

}
