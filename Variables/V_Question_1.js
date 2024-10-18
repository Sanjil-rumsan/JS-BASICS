//1. Write a JavaScript program to compute the sum of the two given integers. If the two values are the same, then return triple their sum.

const x = 1;  // defining x as 1
const y = 3;  // defining y as 3
let s;

if (x === y) {     //if both same,then returning triple their sum.
  s = 3 * (x + y);
} 
else {
  s = x + y;    // if different compute the sum
}
console.log("The sum of",x,"and",y,"is:", s,"as both are different"); //printing value 

const a = 9;
const b = 9;
let z;

if (a === b) {
  z = 3 * (a+b); //if both same,then returning triple their sum.
} 
else{
  z = a + b;  // if different compute the sum
}
console.log("The sum of",a,"and",b,"is:",z,"as both are same"); //printing value 
