import { Injectable } from '@angular/core';
import { IWeatherService } from './iweather-service';

@Injectable({
  providedIn: 'root'
})
export class WeatherFakeService implements IWeatherService {

  constructor() { }
}
