import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import data from '../../assets/resources/en.json';

@Injectable({
  providedIn: 'root'
})

export class ResourceService {
  resource: any;

  constructor() {
  }

  public getResources(): any {

    if (!this.resource) {
      this.resource = data;
    }

    return this.resource;
  }
}
