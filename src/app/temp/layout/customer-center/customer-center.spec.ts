import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerCenter } from './customer-center';

describe('CustomerCenter', () => {
  let component: CustomerCenter;
  let fixture: ComponentFixture<CustomerCenter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerCenter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerCenter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
