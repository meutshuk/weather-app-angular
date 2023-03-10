import { Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, Subject, switchMap } from 'rxjs';
import { WeatherService } from '../weather.service';
import * as _ from 'lodash';
import { BuiltinTypeName } from '@angular/compiler';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  // cityName: string = '';
  name: Subject<string> = new Subject();
  timer: any;
  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {}

  typeName(value: string) {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.weatherService.getWeatherData(value);
    }, 1000);
  }
}
