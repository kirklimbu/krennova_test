import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDepositFormComponent } from './main-deposit-form.component';

describe('MainDepositFormComponent', () => {
  let component: MainDepositFormComponent;
  let fixture: ComponentFixture<MainDepositFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainDepositFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainDepositFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
