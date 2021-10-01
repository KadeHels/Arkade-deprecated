import { Component, OnInit } from '@angular/core';
import { ResourceService } from 'src/app/services/resource.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeResource: any;

  constructor(private resource: ResourceService) { }

  ngOnInit() {
    this.homeResource = this.resource.getResources().home;
  }

}
