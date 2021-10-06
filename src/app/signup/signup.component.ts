import { Component, Input, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  // email: any;


  constructor(private cs : CommonService) { }

  @Input() title : any;
  
  submit() {
    // console.log(this.user);
    if(this.cs.validateEmail(this.user.email)){
      // console.log("valid");
      var temp = {
        name : this.user.name,
        email : this.user.email
      }
      this.users.push(temp);
      // console.log(this.users);
    }
    else
      alert("Wrong credentials!");
  }
  user : any = {}
  users : any = []
  ngOnInit(): void {
  }

}
