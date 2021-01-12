import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitMainFormComponent } from './visit-main-form.component';

describe('VisitMainFormComponent', () => {
  let component: VisitMainFormComponent;
  let fixture: ComponentFixture<VisitMainFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitMainFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitMainFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
