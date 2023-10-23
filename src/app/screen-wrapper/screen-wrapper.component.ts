import { Component } from '@angular/core';
import { FakeAuthService } from '../services/fake-auth.service';

@Component({
  selector: 'app-screen-wrapper',
  templateUrl: './screen-wrapper.component.html',
  styleUrls: ['./screen-wrapper.component.css'],
})
export class ScreenWrapperComponent {
  authStatus: boolean;

  constructor(private auth: FakeAuthService) {
    this.authStatus = auth.getStatus();
  }
}
