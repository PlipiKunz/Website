import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenWrapperHeaderComponent } from './screen-wrapper-header.component';

describe('ScreenWrapperHeaderComponent', () => {
  let component: ScreenWrapperHeaderComponent;
  let fixture: ComponentFixture<ScreenWrapperHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScreenWrapperHeaderComponent]
    });
    fixture = TestBed.createComponent(ScreenWrapperHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
