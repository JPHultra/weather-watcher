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

  weatherData = null;

  ngOnInit(): void {
    weatherData = WeatherService.get(Constants.API_VISEU_WEATHER_ENDPOINT);
  }

}
