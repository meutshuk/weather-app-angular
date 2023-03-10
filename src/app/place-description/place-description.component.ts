import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-place-description',
  templateUrl: './place-description.component.html',
  styleUrls: ['./place-description.component.scss'],
})
export class PlaceDescriptionComponent implements OnInit {
  weatherData: any;
  date: any;

  constructor(private weatherService: WeatherService) {
    setTimeout(() => {
      this.weatherService.getWeatherData('sydney');
    }, 1000);
  }

  ngOnInit(): void {
    this.weatherService.weatherData.subscribe((data) => {
      this.weatherData = data;
      this.date = data.location.localtime;
      console.log(this.date);
    });
  }
}
