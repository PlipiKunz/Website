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

  marquees: string[] = ['This is a marquee made up with css'];
  marquee_index: number = 0;

  authCheck(ob: MatCheckboxChange) {
    this.authService.setStatus(ob.checked);
  }

  marqueeStart(): void {
    console.log('marquee start!');
  }

  marqueeNext(): void {
    console.log('marquee next!');
  }

  marqueeEnd(): void {
    console.log('marquee end!');
  }
}
