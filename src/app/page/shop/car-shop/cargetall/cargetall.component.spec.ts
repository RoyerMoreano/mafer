import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargetallComponent } from './cargetall.component';

describe('CargetallComponent', () => {
  let component: CargetallComponent;
  let fixture: ComponentFixture<CargetallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CargetallComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CargetallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
