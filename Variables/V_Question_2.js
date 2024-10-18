//2. Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7.
let n = 7;
if (n > 0) {
    if (n % 3 === 0 || n % 7 === 0) {
        console.log(n, "is divisible by 3 or 7");
    }
    else{
        console.log(n, "is not divisible by 3 or 7");
    }
}


