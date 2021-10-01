import { Component, OnInit } from '@angular/core';
import { ResourceService } from 'src/app/services/resource.service';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {
  pageNotFoundResource: any;

  constructor(private resource: ResourceService) { }

  ngOnInit(): void {
    this.pageNotFoundResource = this.resource.getResources().pageNotFound;
  }

}
