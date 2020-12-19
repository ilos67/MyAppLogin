import {Component, Optional, ViewEncapsulation} from '@angular/core';
import { TranslateService} from '@ngx-translate/core';
import { AuthService } from './service/auth-service/auth.service';
import { Role } from './_models/role';
import { Account } from './_models/account';

@Component({
  	selector: 'gene-app',
   template:`<router-outlet></router-outlet>
   			<ngx-loading-bar></ngx-loading-bar>`,
   encapsulation: ViewEncapsulation.None
})

export class GeneAppComponent {
   Role = Role;
   account: Account;
   constructor(translate: TranslateService, private accountService: AuthService) {
      translate.addLangs(['en', 'fr', 'he', 'ru' , 'ar' , 'zh' ,'de' , 'es', 'ja', 'ko' , 'it' ,'hu']);
      translate.setDefaultLang('en');

      const browserLang: string = translate.getBrowserLang();
      translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
      this.accountService.account.subscribe(x => this.account = x);
   }

   logout() {
      this.accountService.logout();
  }
}
