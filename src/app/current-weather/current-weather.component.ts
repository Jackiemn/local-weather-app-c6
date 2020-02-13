import { Component, OnInit } from '@angular/core';
import { ICurrentWeather } from '../icurrent-weather';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {
current: ICurrentWeather
  constructor(private weatherService: WeatherService) {
this.current = {
  city: 'Anoka',
  country: 'US',
  date: 1485789600,
  image: '' ,
  temperature: 9,
  description: 'sunny',
}as ICurrentWeather
   }

  ngOnInit() {
    this.weatherService.getCurrentWeather('Anoka', 'US').subscribe(data=> this.current = data)
  }

}
