import { Component, OnInit } from '@angular/core';
import { PageTitleService } from 'app/core/page-title/page-title.service';
import { AuthService } from 'app/service/auth-service/auth.service';

@Component({
  selector: 'ms-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  account = this.accountService.accountValue;

  constructor(private pageTitleService: PageTitleService, private accountService: AuthService) { }

  ngOnInit(): void {
    this.pageTitleService.setTitle("HOME");
  }

}
