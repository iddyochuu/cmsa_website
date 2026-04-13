import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontBunner } from './front-bunner';

describe('FrontBunner', () => {
  let component: FrontBunner;
  let fixture: ComponentFixture<FrontBunner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrontBunner]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrontBunner);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
