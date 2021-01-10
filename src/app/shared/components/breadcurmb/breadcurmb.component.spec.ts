import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcurmbComponent } from './breadcurmb.component';

describe('BreadcurmbComponent', () => {
  let component: BreadcurmbComponent;
  let fixture: ComponentFixture<BreadcurmbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreadcurmbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcurmbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
