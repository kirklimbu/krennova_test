import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDepositComponent } from './main-deposit.component';

describe('MainDepositComponent', () => {
  let component: MainDepositComponent;
  let fixture: ComponentFixture<MainDepositComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainDepositComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainDepositComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
