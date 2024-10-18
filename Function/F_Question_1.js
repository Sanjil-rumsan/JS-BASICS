// 1. Write a JavaScript function that reverses a number. Example x = 32243; Expected Output : 34223

const reverseNumber = (num) => {
       const numStr = num.toString();        // Convert the number to a string and split it into an array of characters
    let reversedStr = '';

    for (let i = numStr.length - 1; i >= 0; i--) {    // Use a for loop to iterate through the string in reverse order
        reversedStr += numStr[i];                    // Appends each character to the reversed string
    }
    return Number(reversedStr);                     // Converts the reversed string back to a number and return it
};

let x = 32243;
let result = reverseNumber(x);
console.log("Reversed number is:", result);                      // Prints Output 