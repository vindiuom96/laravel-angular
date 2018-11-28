import { NgModule,Component } from '@angular/core';

import {RouterModule,Routes} from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {SignupComponent} from './components/signup/signup.component';
import {ProfileComponent} from './components/profile/profile.component';
import {RequestResetComponent} from './components/password/request-reset/request-reset.component';
import {RespondResetComponent} from './components/password/respond-reset/respond-reset.component';


const appRoutes:Routes=[
{
  path:'login',
  component : LoginComponent

},
{
  path:'signup',
  component : SignupComponent

},
{
  path:'profile',
  component : ProfileComponent

},
{
  path:'request-password-reset',
  component : RequestResetComponent

},
{
  path:'respond-password-reset',
  component : RespondResetComponent

},




];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
