import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeweventalertComponent } from './neweventalert.component';

describe('NeweventalertComponent', () => {
  let component: NeweventalertComponent;
  let fixture: ComponentFixture<NeweventalertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeweventalertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeweventalertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
