import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacanzeComponent } from './vacanze.component';

describe('VacanzeComponent', () => {
  let component: VacanzeComponent;
  let fixture: ComponentFixture<VacanzeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VacanzeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VacanzeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
