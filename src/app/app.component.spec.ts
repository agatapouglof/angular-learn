import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TimerComponent } from './timer/timer.component';
import { DatelanguageComponent } from './datelanguage/datelanguage.component';
import { DatalistComponent } from './datalist/datalist.component';
import { DatelanguagePipe } from './shared/pipes/datelanguage.pipe';
import { HttpClient } from '@angular/common/http';

class HttpClientStub{
}

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NavbarComponent,
        TimerComponent,
        DatelanguageComponent,
        DatalistComponent,
        DatelanguagePipe
      ],
      providers:[
        { provide : HttpClient, useClass: HttpClientStub }
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'learn-angular'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('learn-angular');
  });

  xit('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('learn-angular app is running!');
  });
});
