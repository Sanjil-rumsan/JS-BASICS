// 7. Write a function findSquare() returns the square of the input number which is passed as an argument in the function call.

function findSquare(num) {
    return num * num;                     // Returns the square of the input number
}

let inputNum = 5; 
let result = findSquare(inputNum);

console.log("The square of " + inputNum + " is: " + result);