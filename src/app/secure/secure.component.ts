import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.css'],
})
export class SecureComponent {
  constructor(private router: Router) {}

  goHome() {
    this.router.navigateByUrl('/home');
  }
}
