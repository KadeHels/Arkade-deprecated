import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import data from '../../assets/en.json';

@Injectable({
  providedIn: 'root'
})

export class ResourceService {
  resource: any;

  constructor() {
  }

  public getResources(): any {

    if (!this.resource) {
      console.log('Getting Initial Resource: ');

      this.resource = data;

      console.log(this.resource);
    }

    return this.resource;
  }
}
