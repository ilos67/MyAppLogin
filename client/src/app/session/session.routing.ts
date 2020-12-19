import { Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LockScreenComponent } from './lockscreen/lockscreen.component';
import { LockScreenV2Component } from './lockscreenV2/lockscreenV2.component';
import { ForgotPasswordV2Component } from './forgot-passwordV2/forgot-passwordV2.component';
import { RegisterV2Component } from './registerV2/registerV2.component';
import { LoginV2Component } from './loginV2/loginV2.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

export const SessionRoutes: Routes = [
   {
      path: '',
      redirectTo: 'login',
      pathMatch: 'full'
   },
   {
      path: '',
      children: [
         {
            path: 'login',
            component: LoginComponent
         },
         {
            path: 'register',
            component:  RegisterComponent
         },
         {
            path: 'forgot-password',
            component: ForgotPasswordComponent
         },
         {
            path: 'verify-email',
            component:  VerifyEmailComponent
         },
          {
            path: 'reset-password',
            component: ResetPasswordComponent
         },
        
      ]
   }
];
