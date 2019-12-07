import { TestBed } from '@angular/core/testing';

import { CountriesService } from './countries.service';
import { HttpClient } from 'selenium-webdriver/http';

class CountriesServiceStub{
}
class HttpClientStub{
}

describe('CountriesService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      { provide : CountriesService, useClass: CountriesServiceStub },
      { provide : HttpClient, useClass: HttpClientStub }
    ]
  }));

  it('should be created', () => {
    const service: CountriesService = TestBed.get(CountriesService);
    expect(service).toBeTruthy();
  });
});
