import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-un-secure',
  templateUrl: './un-secure.component.html',
  styleUrls: ['./un-secure.component.css'],
})
export class UnSecureComponent {
  constructor(private router: Router) {}

  goHome() {
    this.router.navigateByUrl('/home');
  }
}
