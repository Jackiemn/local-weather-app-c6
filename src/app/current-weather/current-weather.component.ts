import { Component, OnInit } from '@angular/core';
import { ICurrentWeather } from '../icurrent-weather';
import { IWeatherService } from '../iweather-service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {
current: ICurrentWeather
  constructor(private weatherService: IWeatherService) {
    
   }

  ngOnInit() {
    this.weatherService.getCurrentWeather('Anoka', 'US').subscribe(data => this.current = data)
  }

}
