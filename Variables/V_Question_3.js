//3. Write a JavaScript program to get the current date.


let currentDate = new Date(); // this constructor gets the current date

console.log("The current date is:", currentDate); // Printing current date 

let randomdate = new Date();

const day = randomdate.getDay();
const month = randomdate.getMonth() + 1;
const year = randomdate.getFullYear();

//formate the date
// let CurrentDate = `${day}/${month}/${year}`;
let CurrentDate = day + "/" + month + "/" + year;

console.log("The current date is:", CurrentDate); // Printing current date 