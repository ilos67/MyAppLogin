import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth-service/auth.service';

@Component({
  selector: 'ms-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(
    private router: Router,
    private accountService: AuthService
) {
    // redirect to home if already logged in
    if (this.accountService.accountValue) {
        this.router.navigate(['/']);
    }
}

  ngOnInit(): void {
  }

}
