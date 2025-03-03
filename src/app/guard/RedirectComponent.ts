import { Component } from '@angular/core';

@Component({
  selector: 'app-redirect',
  template: `<p>Redirecting...</p>`,
})
export class RedirectComponent {
  constructor() {
    window.location.href = 'http://localhost:8080/login'; // Redirect to host-app
  }
}
