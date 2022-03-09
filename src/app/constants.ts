import { Injectable } from "@angular/core";

@Injectable()

export class Constants {
  public static API_VISEU_WEATHER_ENDPOINT: string = "http://api.ipma.pt/open-data/forecast/meteorology/cities/daily/1182300.json";
  public static API_WEATHER_TYPE_ENDPOINT: string = "https://api.ipma.pt/open-data/weather-type-classe.json";
  public static API_WIND_CLASS_ENDPOINT: string = "https://api.ipma.pt/open-data/wind-speed-daily-classe.json";
  public static API_PRECIPITATION_CLASS_ENDPOINT: string = "https://api.ipma.pt/open-data/precipitation-classe.json";
  public static TITLE_WEBSITE: string = "Weather Watcher";
}
