import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  users: any = {
    1000: { acno: 1000, actype: "savings", username: "userone", password: "userone", balance: 50000 },
    1001: { acno: 1001, actype: "savings", username: "usertwo", password: "usertwo", balance: 5000 },
    1002: { acno: 1002, actype: "current", username: "userthree", password: "userthree", balance: 10000 },
    1003: { acno: 1003, actype: "current", username: "userfour", password: "userfour", balance: 6000 }
  }
  constructor(private rout: Router) { }
  register2(a: any, b: any, c: any) {

    if (a in this.users) {
      alert("user exist")
    }
    else {
      this.users[a] = {
        acno: a,
        actype: "",
        username: b,
        password: c,
        balance: ""
      }
      alert("account created")
      this.rout.navigateByUrl("")
    }

  }
  deposit2(a: any, b: any, c: any) {
    if (a in this.users) {
      this.users[a]["balance"] += parseFloat(b)
      alert(`INR ${b} hss been deposited to your account ${a} and the balance is ${this.users[a]["balance"]} `)
    }

  }
  withdraw2(a: any, b: any, c: any) {
    if (a in this.users) {
      if (b < this.users[a]["balance"]) {
        this.users[a]["balance"] -= parseFloat(b)
        alert(`INR ${b} hss been debited from your account ${a} and the balance is ${this.users[a]["balance"]} `)
      }
      else {
        alert("no sufficent balance")
      }

    }

  }
}

