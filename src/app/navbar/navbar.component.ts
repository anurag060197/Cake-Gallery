import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  searchtext : any;
  isUserLoggedIn : boolean = false;

  constructor(private router: Router) { }

  ngDoCheck(){
    if(localStorage.token)
      this.isUserLoggedIn = true;
    else
      this.isUserLoggedIn = false;
  }

  logOut(){
    localStorage.clear();
    this.isUserLoggedIn = false;
  }

  @Input() title: any;

  search(){
    this.router.navigate(['/search'], { queryParams: {q: this.searchtext}})
  }

  ngOnInit(): void {
  }

}
