import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: any = {};
  loginError: any = null;
  
  login(){
    this.loader.start();
    var url = "https://apifromashu.herokuapp.com/api/login"
    this.http.post(url, this.user).subscribe((response: any) => {
      this.loader.stop();
      console.log("response from login api" , response)
      if(response.token) {
        localStorage.token = response.token;
        this.router.navigate(["/"]);
        this.loginError = null;
      }
    },(err)=>{
      this.loader.stop();
      console.log("Error "+ err);
    })
  }
  
  constructor(private http: HttpClient,private router: Router, private loader: NgxUiLoaderService) { }


  ngOnInit(): void {
  }

}
