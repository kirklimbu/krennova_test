import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsFormComponent } from './sms-form.component';

describe('SmsFormComponent', () => {
  let component: SmsFormComponent;
  let fixture: ComponentFixture<SmsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
