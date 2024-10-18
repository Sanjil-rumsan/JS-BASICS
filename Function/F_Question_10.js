// 10. Write a implicit js function that formats the number in following format. 10000 => 10,000, 1000000 =>10,000,000

let formatNumber = (number) => number.toLocaleString();
let numb1 = 10000; 
let numb2 = 1000000; 

console.log(formatNumber(numb1)); 
console.log(formatNumber(numb2)); 
