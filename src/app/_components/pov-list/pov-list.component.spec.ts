import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PovListComponent } from './pov-list.component';

describe('PovListComponent', () => {
  let component: PovListComponent;
  let fixture: ComponentFixture<PovListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PovListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PovListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
