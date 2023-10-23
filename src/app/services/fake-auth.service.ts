import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FakeAuthService {
  private authStatus: boolean = false;

  constructor() {}

  getStatus(): boolean {
    return this.authStatus;
  }

  setStatus(status: boolean): void {
    this.authStatus = status;
  }
}
