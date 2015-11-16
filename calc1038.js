"use strict";

class Calc {
   constructor(x, y) {
      this.x = x;
      this.y = y;
   }

   static addition(val) {
      return +val.x + +val.y;
   }
   
   static subtraction(val) {
      return val.x - val.y;
   }

   static multiplication(val) {
      return val.x * val.y;
   }

   static division(val) {
      return val.x / val.y;
   }
}

const calcThis = new Calc(5, 5);

console.log(Calc.subtraction(calcThis));