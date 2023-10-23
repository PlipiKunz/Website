import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-screen-wrapper-home',
  templateUrl: './screen-wrapper-home.component.html',
  styleUrls: ['./screen-wrapper-home.component.css'],
})
export class ScreenWrapperHomeComponent {
  constructor(private router: Router) {}

  goSecure() {
    this.router.navigateByUrl('/home/secure');
  }

  goUnSecure() {
    this.router.navigateByUrl('/home/un-secure');
  }
}
