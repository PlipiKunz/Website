import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { ScreenWrapperComponent } from './screen-wrapper/screen-wrapper.component';
import { FakeAuthService } from './services/fake-auth.service';
import { SecureComponent } from './secure/secure.component';
import { UnSecureComponent } from './un-secure/un-secure.component';
import { ScreenWrapperHeaderComponent } from './screen-wrapper-header/screen-wrapper-header.component';
import { ScreenWrapperFooterComponent } from './screen-wrapper-footer/screen-wrapper-footer.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { ScreenWrapperHomeComponent } from './screen-wrapper-home/screen-wrapper-home.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ScreenWrapperComponent,
    SecureComponent,
    UnSecureComponent,
    ScreenWrapperHeaderComponent,
    ScreenWrapperFooterComponent,
    ScreenWrapperHomeComponent,
    SideMenuComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    MatCheckboxModule,
    MatIconModule,
    HttpClientModule,

    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
    NoopAnimationsModule,
  ],
  providers: [FakeAuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
