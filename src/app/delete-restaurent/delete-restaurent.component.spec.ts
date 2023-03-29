import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteRestaurentComponent } from './delete-restaurent.component';

describe('DeleteRestaurentComponent', () => {
  let component: DeleteRestaurentComponent;
  let fixture: ComponentFixture<DeleteRestaurentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteRestaurentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteRestaurentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
