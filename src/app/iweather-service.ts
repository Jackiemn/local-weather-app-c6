import { ICurrentWeather } from './icurrent-weather';
import { Observable } from 'rxjs';

export interface IWeatherService {
  getCurrentWeather(searchText: string | number, country?: string) : Observable<ICurrentWeather>
}
