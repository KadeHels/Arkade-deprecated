import { Component, OnInit } from '@angular/core';
import { ResourceService } from 'src/app/services/resource.service';

@Component({
  selector: 'app-gravity-calc',
  templateUrl: './gravity-calc.component.html',
  styleUrls: ['./gravity-calc.component.css']
})
export class GravityCalcComponent implements OnInit {

  public description = 'Gravity Calculator use the calc button to solve for the desired input';

  public gravityUnitList = ['m/s^2', 'ft/s^2'];
  public distanceUnitList = ['m', 'ft'];
  public timeUnitList = ['sec', 'min'];

  // d(m) = G(m/s*s) * t(s)*t(s)
  public gravity: number = 0;
  public distance: number = 0;
  public time: number = 0;

  public gravityUnit = this.gravityUnitList[0];
  public distanceUnit = this.distanceUnitList[0];
  public timeUnit!: string;

  gravityResource: any;

  constructor(private resource: ResourceService) {
    this.gravityResource = this.resource.getResources().gravity;
   }

  ngOnInit() {
    this.gravity = 9.8;
    this.time = 3;
    this.calcDistance();
  }

  // Calculate Methods
  calcDistance() {
    // meters
    this.distance =  this.convertToMeters(this.gravity, this.gravityUnit) * Math.pow(this.time, 2);

    // feet
    if (this.distanceUnit !== this.distanceUnitList[0]) {
      this.distance *= (33 / 36);
    }
  }

  calcTime () {
    this.time = Math.sqrt(this.convertToMeters(this.distance, this.distanceUnit) / this.convertToMeters(this.gravity, this.gravityUnit));
  }

  calcGravity() {
    // meters
    this.gravity = this.convertToMeters(this.distance, this.distanceUnit) / Math.pow(this.time, 2);

    // feet
    if (this.gravityUnit !== this.gravityUnitList[0]) {
      this.gravity *= (33 / 36);
    }
  }

  // Change Units Methods
  changeGravity() {
    if (this.gravityUnit === this.gravityUnitList[0]) {
      this.gravityUnit = this.gravityUnitList[1];
    } else {
      this.gravityUnit = this.gravityUnitList[0];
    }

    this.calcGravity();
  }

  changeDistance() {
    if (this.distanceUnit === this.distanceUnitList[0]) {
      this.distanceUnit = this.distanceUnitList[1];
    } else {
      this.distanceUnit = this.distanceUnitList[0] ;
    }

    this.calcDistance();
  }


  // Private Methods
  private convertToMeters(input: number, unit: string): number {
    // feet
    if (unit === this.distanceUnitList[1] || unit === this.gravityUnitList[1]) {
      return input *= 36 / 33;
    }
    return input;
  }

  private convertToFeet(input: number, unit: string): number {
    // feet
    if (unit === this.distanceUnitList[1] || unit === this.gravityUnitList[1]) {
      return input;
    }
    return input *= 33 / 36;
  }

}
