import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitTabContainerComponent } from './visit-tab-container.component';

describe('VisitTabContainerComponent', () => {
  let component: VisitTabContainerComponent;
  let fixture: ComponentFixture<VisitTabContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitTabContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitTabContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
