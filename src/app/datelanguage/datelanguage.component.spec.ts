import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatelanguageComponent } from './datelanguage.component';

describe('DatelanguageComponent', () => {
  let component: DatelanguageComponent;
  let fixture: ComponentFixture<DatelanguageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatelanguageComponent ]
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
