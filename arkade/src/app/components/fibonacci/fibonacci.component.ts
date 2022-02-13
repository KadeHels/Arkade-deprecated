import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './fibonacci.component.html',
  styleUrls: ['./fibonacci.component.css']
})
export class FibonacciComponent implements OnInit {

  startingNumber: number = 0;


  constructor() {

    this.getSequence(0,1,10);
   }

  ngOnInit(): void {
  }

  getSequence(startValue1: number, startValue2: number, requestedCount: number ): number {
    let a = startValue1;
    let b = startValue2;
    
    console.log(a);
    console.log(b);

    for (let i = 0; i < requestedCount; i++) {
      let temp = a;
      a = b;
      b = b + temp;
      
      console.log(b);
    }
    return 0;
  }
}
