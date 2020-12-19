import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AlertService } from '../service/alert/alert.service';
import { AuthService } from '../service/auth-service/auth.service';
import { MustMatch } from '../_helpers/must-match.validator';

@Component({
  selector: 'ms-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  account = this.accountService.accountValue;
  form: FormGroup;
  loading = false;
  submitted = false;
  deleting = false;

  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private accountService: AuthService,
      private alertService: AlertService
  ) { }

  ngOnInit() {
      this.form = this.formBuilder.group({
          title: [this.account.title, Validators.required],
          firstName: [this.account.firstName, Validators.required],
          lastName: [this.account.lastName, Validators.required],
          email: [this.account.email, [Validators.required, Validators.email]],
          password: ['', [Validators.minLength(6)]],
          confirmPassword: ['']
      }, {
          validator: MustMatch('password', 'confirmPassword')
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.form.controls; }

  onSubmit() {
      this.submitted = true;

      // reset alerts on submit
      this.alertService.clear();

      // stop here if form is invalid
      if (this.form.invalid) {
          return;
      }

      this.loading = true;
      this.accountService.update(this.account.id, this.form.value)
          .pipe(first())
          .subscribe({
              next: () => {
                  this.alertService.success('Update successful', { keepAfterRouteChange: true });
                  this.router.navigate(['../'], { relativeTo: this.route });
              },
              error: error => {
                  this.alertService.error(error);
                  this.loading = false;
              }
          });
  }

  onDelete() {
      if (confirm('Are you sure?')) {
          this.deleting = true;
          this.accountService.delete(this.account.id)
              .pipe(first())
              .subscribe(() => {
                  this.alertService.success('Account deleted successfully', { keepAfterRouteChange: true });
              });
      }
  }

}
