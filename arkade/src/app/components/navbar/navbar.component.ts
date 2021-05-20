import { Component, OnInit } from '@angular/core';
import { ResourceService } from 'src/app/services/resource.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  navbarResource: any;
  constructor(private resource: ResourceService) { }

  ngOnInit(): void {
    this.navbarResource = this.resource.getResources().navbar;
  }

}
