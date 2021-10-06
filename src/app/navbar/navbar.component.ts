import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  searchtext : any;

  constructor() { }

  search(){
    alert('Searching '+ this.searchtext + ' cakes')
  }

  ngOnInit(): void {
  }

}
