import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenWrapperComponent } from './screen-wrapper.component';

describe('ScreenWrapperComponent', () => {
  let component: ScreenWrapperComponent;
  let fixture: ComponentFixture<ScreenWrapperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScreenWrapperComponent]
    });
    fixture = TestBed.createComponent(ScreenWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
