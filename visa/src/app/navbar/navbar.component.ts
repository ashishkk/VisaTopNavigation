import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  menuItems = ['Pay With Visa', 'Partner With Us', 'Run Your Business', 'Travel With Visa', 'Visa Everywheres' ];
  selectedItem = '';
  constructor() { }
  ngOnInit() {
  }
  toggleButton(menuItem: string) {
    if(this.selectedItem !== menuItem ) {
      this.selectedItem = menuItem;
    } else {
      this.selectedItem = '';
    }
  }

}
