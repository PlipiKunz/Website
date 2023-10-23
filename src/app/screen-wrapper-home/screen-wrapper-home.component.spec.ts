import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenWrapperHomeComponent } from './screen-wrapper-home.component';

describe('ScreenWrapperHomeComponent', () => {
  let component: ScreenWrapperHomeComponent;
  let fixture: ComponentFixture<ScreenWrapperHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScreenWrapperHomeComponent]
    });
    fixture = TestBed.createComponent(ScreenWrapperHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
