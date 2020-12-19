import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

@Component({
  selector: 'ms-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  accounts: any[];

  constructor(private accountService: AuthService) {}

  ngOnInit() {
      this.accountService.getAll()
          .pipe(first())
          .subscribe(accounts => this.accounts = accounts);
  }

  deleteAccount(id: string) {
      const account = this.accounts.find(x => x.id === id);
      account.isDeleting = true;
      this.accountService.delete(id)
          .pipe(first())
          .subscribe(() => {
              this.accounts = this.accounts.filter(x => x.id !== id) 
          });
  }

}
