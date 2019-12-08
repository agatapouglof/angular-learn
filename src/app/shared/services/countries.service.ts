import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  BASE_URL = "https://restcountries.eu/rest/v2/";

  COUNTRIES_CODES = ['fra', 'gbr', 'pt', 'deu', 'jpn', 'pol'];

  constructor(private httpClient: HttpClient) { }

  public getAllCountries(){
    return this.httpClient.get(this.BASE_URL);
  }

  public getCountriesByCodes(){
    let requestUrl = this.BASE_URL+ "alpha?codes=" + this.COUNTRIES_CODES.join(";");
    return this.httpClient.get(requestUrl);
  }
}
