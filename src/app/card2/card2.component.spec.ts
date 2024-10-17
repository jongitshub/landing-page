import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsComponent2 } from './card2.component';

describe('CardsComponent', () => {
  let component: CardsComponent2;
  let fixture: ComponentFixture<CardsComponent2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsComponent2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsComponent2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
