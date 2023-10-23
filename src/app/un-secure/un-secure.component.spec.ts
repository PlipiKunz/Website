import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnSecureComponent } from './un-secure.component';

describe('UnSecureComponent', () => {
  let component: UnSecureComponent;
  let fixture: ComponentFixture<UnSecureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnSecureComponent]
    });
    fixture = TestBed.createComponent(UnSecureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
