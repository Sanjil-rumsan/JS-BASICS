//4. Write a JavaScript program to calculate multiplication and division of two numbers.(use same function to achieve this)

const mulNDiv = (a, b, isDivide) => {
    let result;
    if (isDivide) {
        result = a / b;
    } else {
    result = a * b;
    }
    return result;
};
    console.log (mulNDiv(1, 2, true));
   