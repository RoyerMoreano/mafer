import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailgetallComponent } from './detailgetall.component';

describe('DetailgetallComponent', () => {
  let component: DetailgetallComponent;
  let fixture: ComponentFixture<DetailgetallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailgetallComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailgetallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
