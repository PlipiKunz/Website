import { Component } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { FakeAuthService } from '../services/fake-auth.service';

@Component({
  selector: 'app-screen-wrapper-header',
  templateUrl: './screen-wrapper-header.component.html',
  styleUrls: ['./screen-wrapper-header.component.css'],
})
export class ScreenWrapperHeaderComponent {
  constructor(private authService: FakeAuthService) {}

  authCheck(ob: MatCheckboxChange) {
    this.authService.setStatus(ob.checked);
  }
}
