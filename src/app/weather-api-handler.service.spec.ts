import { TestBed } from '@angular/core/testing';

import { WeatherApiHandlerService } from './weather-api-handler.service';

describe('WeatherApiHandlerService', () => {
  let service: WeatherApiHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherApiHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
