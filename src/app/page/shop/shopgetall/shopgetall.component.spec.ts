import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopgetallComponent } from './shopgetall.component';

describe('ShopgetallComponent', () => {
  let component: ShopgetallComponent;
  let fixture: ComponentFixture<ShopgetallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopgetallComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShopgetallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
