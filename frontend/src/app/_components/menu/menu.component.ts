import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  private loggedIn : boolean;
  constructor(private router: Router) {
  }

  ngOnInit() {
    this.router.events.subscribe(event => {
      this.loggedIn = localStorage.getItem('token') ? true : false;
    });
  }

  onLogout(): void {
    this.loggedIn = false;
  	localStorage.removeItem("token");
  }

}
