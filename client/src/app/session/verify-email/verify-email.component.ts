import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from 'app/service/alert/alert.service';
import { AuthService } from 'app/service/auth-service/auth.service';
import { first } from 'rxjs/operators';
enum EmailStatus {
  Verifying,
  Failed
}

@Component({
  selector: 'ms-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.scss']
})
export class VerifyEmailComponent implements OnInit {
  EmailStatus = EmailStatus;
  emailStatus = EmailStatus.Verifying;

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private accountService: AuthService,
      private alertService: AlertService
  ) { }

  ngOnInit() {
      const token = this.route.snapshot.queryParams['token'];

      // remove token from url to prevent http referer leakage
      this.router.navigate([], { relativeTo: this.route, replaceUrl: true });

      this.accountService.verifyEmail(token)
          .pipe(first())
          .subscribe({
              next: () => {
                  this.alertService.success('Verification successful, you can now login', { keepAfterRouteChange: true });
                  this.router.navigate(['../login'], { relativeTo: this.route });
              },
              error: () => {
                  this.emailStatus = EmailStatus.Failed;
              }
          });
  }

}
