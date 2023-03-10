import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather-description',
  templateUrl: './weather-description.component.html',
  styleUrls: ['./weather-description.component.scss'],
})
export class WeatherDescriptionComponent implements OnInit {
  weatherData: any;
  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.weatherService.weatherData.subscribe((data) => {
      this.weatherData = data;
    });
  }
}
