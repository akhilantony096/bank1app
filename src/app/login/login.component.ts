import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

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
  accne=""
  

  constructor(private rout:Router,private user:DataService) { }


  ngOnInit(): void {
  }
  acnchange(event: any) {
    h = event.target.value;
  }
  login(a: any, c: any) {
     let users=this.user.users;
    if (h in users) {
      
      if (a.value == users[h]["username"] && c.value == users[h]["password"]) {
        
        
        alert("login succesfull")
        this.rout.navigateByUrl("/dashboardcomponent")
        return 1;
      }
      else {
        
        
        alert("incorrect password or username")
        return 0;
      }
    }
    else {
      
      alert("invalid login")
      this.rout.navigateByUrl("/registrationcomponent")
      return -1;
    }
  }
}
