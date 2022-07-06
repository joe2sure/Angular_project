import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportUiComponent } from './sport-ui.component';

describe('SportUiComponent', () => {
  let component: SportUiComponent;
  let fixture: ComponentFixture<SportUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SportUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SportUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
