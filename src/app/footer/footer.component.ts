import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  public chart: any;
  weatherData: any;
  dateData: any[] = [];
  hourlyData: any[] = [];
  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.weatherService.weatherData.subscribe((data) => {
      this.weatherData = data;
      var hourDataSet = data.forecast.forecastday[0].hour;
      for (let i = 0; i < hourDataSet.length; i++) {
        this.dateData.push(hourDataSet[i].time);
        this.hourlyData.push(hourDataSet[i].temp_c);
      }
    });
    this.createChart();
  }

  createChart() {
    this.chart = new Chart('MyChart', {
      type: 'line', //this denotes tha type of chart
      
      data: {
        // values on X-Axis
        labels: this.dateData,
        datasets: [
          {
            label: 'Temperature',
            data: this.hourlyData,
            backgroundColor: 'blue',
            tension: 0.5,
            
          },
        ],
      },
      options: {
        interaction: {
          intersect: false,
          
        },
        parsing: {
        },
        datasets: {
        },
        plugins: {
          legend: {
            // display: false,
            // onClick: () => {},
            display: true,
          },
        },
      },
    });
  }
}
