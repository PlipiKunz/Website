import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenWrapperFooterComponent } from './screen-wrapper-footer.component';

describe('ScreenWrapperFooterComponent', () => {
  let component: ScreenWrapperFooterComponent;
  let fixture: ComponentFixture<ScreenWrapperFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScreenWrapperFooterComponent]
    });
    fixture = TestBed.createComponent(ScreenWrapperFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
