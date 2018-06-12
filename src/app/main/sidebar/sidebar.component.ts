/**
 * Created by RenukaThakurAdmin on 10/06/18.
 */
import { Component, OnInit} from '@angular/core';
import { Router} from "@angular/router";
import {UsersComponent} from "../users/users.component";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{
  sidebarMenu: any[];
  
  constructor(private router: Router) {
  }
  ngOnInit() {
    this.sidebarMenu = [
      {
        name: 'Users',
        route: '/main/users'
      },
      {
        name: 'Languages',
        route: '/main/languages'
      },
      {
        name: 'Screens',
        route: '/main/screens'
      }
    ]
  }
  
}
