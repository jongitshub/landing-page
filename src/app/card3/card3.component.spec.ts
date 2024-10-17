import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsComponent3 } from './card3.component';

describe('CardsComponent', () => {
  let component: CardsComponent3;
  let fixture: ComponentFixture<CardsComponent3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsComponent3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsComponent3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
