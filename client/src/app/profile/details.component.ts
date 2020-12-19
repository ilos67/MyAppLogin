import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ms-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  
  account = this.accountService.accountValue;
  
  constructor(private accountService: AuthService) { }

  ngOnInit(): void {
  }

}
