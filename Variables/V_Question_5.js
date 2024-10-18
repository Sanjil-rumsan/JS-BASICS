// 5. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
//[ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
//Expected Output :
//60°C is 140 °F
//45°F is 7.222222222222222°C

let celsius = 60;
let convertedvalue = (celsius * 9) / 5 + 32; // Convert Celsius to Fahrenheit
console.log(celsius + "°C is equals to " + convertedvalue + "°F");

let fahrenheit = 45;
let convertedvalue1 = ((fahrenheit - 32) * 5) / 9;   // Convert Fahrenheit to Celsius
console.log(fahrenheit + "°F is equals to " + convertedvalue1 + "°C");