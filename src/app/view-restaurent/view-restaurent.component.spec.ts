import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRestaurentComponent } from './view-restaurent.component';

describe('ViewRestaurentComponent', () => {
  let component: ViewRestaurentComponent;
  let fixture: ComponentFixture<ViewRestaurentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewRestaurentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewRestaurentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
