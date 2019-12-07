import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../shared/services/countries.service';

@Component({
  selector: 'app-datelanguage',
  templateUrl: './datelanguage.component.html',
  styleUrls: ['./datelanguage.component.css']
})
export class DatelanguageComponent implements OnInit {

  countryLists : any;
  selectedCountryCode : string = 'FR';

  constructor(private countriesServices: CountriesService) { }

  ngOnInit() {
    this.getListe();
  }

  public getListe(){
    this.countriesServices.getCountriesByCodes().subscribe(res => {
      this.countryLists = res;
    });
  }

  public selectDateLanguage(countryCode : string){
    this.selectedCountryCode = countryCode;
  }

  public getAllCountries(){
    this.countriesServices.getAllCountries().subscribe(
      res => {
        console.log(res);
      }
    );
  }

}
