import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Website :)';

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      'twitter',
      domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/Logo_of_Twitter.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      'tumblr',
      domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/Tumblr_Logos.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      'itch',
      domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/itchio-logo.svg'
      )
    );
  }
}
