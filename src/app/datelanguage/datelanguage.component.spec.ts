import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatelanguageComponent } from './datelanguage.component';
import { from } from 'rxjs';
import { CountriesService } from '../shared/services/countries.service';
import { DatelanguagePipe } from '../shared/pipes/datelanguage.pipe';

class countriesServiceStub {
  constructor(){}

  public getCountriesByCodes(){
    let countriesTemplate = [
      { languages: [{nativeName : 'fr'} ] },
      { languages: [{nativeName : 'pt'} ] }
    ]
    return from([ countriesTemplate ] );
  }
}

describe('DatelanguageComponent', () => {
  let component: DatelanguageComponent;
  let fixture: ComponentFixture<DatelanguageComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatelanguageComponent, DatelanguagePipe ],
      providers: [
        { provide : CountriesService, useClass: countriesServiceStub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatelanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
