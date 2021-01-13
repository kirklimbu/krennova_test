import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitDetailFormComponent } from './visit-detail-form.component';

describe('VisitDetailFormComponent', () => {
  let component: VisitDetailFormComponent;
  let fixture: ComponentFixture<VisitDetailFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitDetailFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitDetailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
