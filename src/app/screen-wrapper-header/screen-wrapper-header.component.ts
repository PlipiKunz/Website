import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { FakeAuthService } from '../services/fake-auth.service';

@Component({
  selector: 'app-screen-wrapper-header',
  templateUrl: './screen-wrapper-header.component.html',
  styleUrls: ['./screen-wrapper-header.component.css'],
})
export class ScreenWrapperHeaderComponent {
  constructor(private authService: FakeAuthService) {}

  marquees: string[] = [
    'This is a marquee made up with css!',
    'This is different text!',
  ];
  marquee_index: number = 0;

  authCheck(ob: MatCheckboxChange) {
    this.authService.setStatus(ob.checked);
  }

  marqueeNext(): void {
    this.marquee_index++;
    if (this.marquee_index >= this.marquees.length) {
      this.marquee_index = 0;
    }
  }
}
