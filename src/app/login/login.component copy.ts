import { Component, OnInit } from '@angular/core';
var users = {
  1000: { acno: 1000, actype: "savings", username: "userone", password: "userone", balance: 50000 },
  1001: { acno: 1001, actype: "savings", username: "usertwo", password: "usertwo", balance: 5000 },
  1002: { acno: 1002, actype: "current", username: "userthree", password: "userthree", balance: 10000 },
  1003: { acno: 1003, actype: "current", username: "userfour", password: "userfour", balance: 6000 }
}
var h = 0

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  text = "trustable partner"
  accn = "accont number"
  unam = "user name"
  pwdw = "password"

  constructor() { }


  ngOnInit(): void {
  }
  acnchange(event: any) {
    h = event.target.value;
  }
  login(a: any, c: any) {
    if (h in users) {
      
      if (a.value == users[h]["username"] && c.value == users[h]["password"]) {
        console.log(a.value);
        
        alert("login succesfull")
        return 1;
      }
      else {
        console.log(a.value);
        
        alert("incorrect password or username")
        return 0;
      }
    }
    else {
      console.log();
      
      alert("invalid login")
      return -1;
    }



  }





}
