/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GravityCalcComponent } from './gravity-calc.component';

describe('GravityCalcComponent', () => {
  let component: GravityCalcComponent;
  let fixture: ComponentFixture<GravityCalcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GravityCalcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GravityCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
