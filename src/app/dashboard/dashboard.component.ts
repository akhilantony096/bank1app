import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  accn = ""
  pswd=""
  amount = ""

  constructor(private user: DataService, private rout: Router) { }

  ngOnInit(): void {
  }



  deposit1() {
    this.user.deposit2(this.accn, this.amount,this.pswd)
    

  }
  withdraw1() {
    this.user.withdraw2(this.accn, this.amount,this.pswd)

  }

}





