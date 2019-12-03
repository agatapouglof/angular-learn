import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a navbar in a the component', () => {
    let compiled : HTMLElement = fixture.debugElement.nativeElement;
    let navs = compiled.querySelectorAll('nav');
    expect(navs.length).toBe(1);
  });

  it("have 3 button in the nav element", ()=> {
    let compiled : HTMLElement = fixture.debugElement.nativeElement;
    // check if there is 3 buttons in the nav bar nav element by queryAll nav button
    expect(compiled.querySelectorAll("nav button").length).toBe(3);
  });
});
