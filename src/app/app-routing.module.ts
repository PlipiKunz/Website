import { NgModule, inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  RouterModule,
  RouterStateSnapshot,
  Routes,
} from '@angular/router';
import { ScreenWrapperComponent } from './screen-wrapper/screen-wrapper.component';
import { SecureComponent } from './secure/secure.component';
import { UnSecureComponent } from './un-secure/un-secure.component';
import { FakeAuthService } from './services/fake-auth.service';
import { ScreenWrapperHomeComponent } from './screen-wrapper-home/screen-wrapper-home.component';

const AuthenticationGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  return inject(FakeAuthService).getStatus();
};

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: ScreenWrapperComponent,
    children: [
      {
        path: '',
        component: ScreenWrapperHomeComponent,
      },
      {
        path: 'secure',
        component: SecureComponent,
        canActivate: [AuthenticationGuard],
      },
      { path: 'un-secure', component: UnSecureComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
