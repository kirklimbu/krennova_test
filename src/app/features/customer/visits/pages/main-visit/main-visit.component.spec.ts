import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainVisitComponent } from './main-visit.component';

describe('MainVisitComponent', () => {
  let component: MainVisitComponent;
  let fixture: ComponentFixture<MainVisitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainVisitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainVisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
