import { Component, OnInit } from '@angular/core';

import{ Constants } from '../constants';
import { WeatherApiHandlerService } from '../weather-api-handler.service'

@Component({
  selector: 'app-weather-panel',
  templateUrl: './weather-panel.component.html',
  styleUrls: ['./weather-panel.component.scss']
})
export class WeatherPanelComponent implements OnInit {

  constructor(private WeatherService: WeatherApiHandlerService) { }

  weatherData: any;
  hello = "Hello"

  ngOnInit(): void {
    console.log("init");

    this.WeatherService.get(Constants.API_VISEU_WEATHER_ENDPOINT).subscribe(res => {
      console.log(res.data);
      //this.weatherData = JSON.stringify(res.data[0]);
    });
  }

}
