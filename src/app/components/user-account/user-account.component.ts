import { Component, OnInit } from '@angular/core';
import { UserAccountService } from 'src/app/services/user-account.service';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit {

  userAccount!: any[];
  constructor(private userAccountService: UserAccountService) {
    this.userAccountService.getUserAccountInfo().subscribe(userAccount => {
      console.log(userAccount);
      this.userAccount=userAccount;
    })
   }

  ngOnInit(): void {
  }

}
