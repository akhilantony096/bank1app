// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-registration',
//   templateUrl: './registration.component.html',
//   styleUrls: ['./registration.component.css']
// })
// export class RegistrationComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {
  text = "trustable partner"
  accn = ""
  uname = ""
  pwdw = ""


  constructor(private user: DataService, private rout: Router) { }


  ngOnInit(): void {
  }

  // register() {
  //   var users = this.user.users
  //   if (this.accn in users) {
  //     alert("user exist")
  //   }
  //   else {
  //     users[this.accn] = {
  //       acno: this.accn,
  //       actype: "",
  //       username: this.uname,
  //       password: this.pwdw,
  //       balance: ""
  //     }
  //     alert("account created")
  //     this.rout.navigateByUrl("")

  //   }
  // }
  register1() {
   this.user.register2(this.accn,this.uname,this.pwdw)
    
  }

}



// if (this.accn == users[h]["username"] && this.pwdw == users[h]["password"]) {
//   console.log(a.value);

//   alert("login succesfull")

//   return 1;
// }
// else {
//   console.log(a.value);

//   alert("incorrect password or username")
//   return 0;
// }

