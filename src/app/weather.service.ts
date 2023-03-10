import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  SECRET_CODE_PLEASE_DONT_STEAL: string = '7766ccfc747b43968bf93158230903';
  weatherData: Subject<any> = new Subject();

  constructor(private http: HttpClient) {}

  getWeatherData(cityName: string) {
    this.http
      .get(
        `http://api.weatherapi.com/v1/forecast.json?key=${this.SECRET_CODE_PLEASE_DONT_STEAL}&q=${cityName}&days=5&aqi=no&alerts=no`
      )
      .subscribe((data) => {
        this.weatherData.next(data);
        console.log(data);
      });
  }
}
