import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcontentComponent } from './listcontent.component';

describe('ListcontentComponent', () => {
  let component: ListcontentComponent;
  let fixture: ComponentFixture<ListcontentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListcontentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
