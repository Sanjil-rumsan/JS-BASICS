// 6. Write a JavaScript program to count the number of vowels in a given string.

let str = "rumsan";
let vowelCount = 0; // counter for counting vowels
for (let i = 0; i < str.length; i++) {    // Loop through each character in the string
  
  if ("aeiouAEIOU".includes(str[i])) {     // Checks if the character is a vowel
    
    vowelCount++;                         // If the string is vowel, counter number increases
  }
}
console.log("The number of vowels in", str, "is:", vowelCount);


let string = prompt("Enter a string: ");
let Count = 0; // counter for counting vowels
for (let i = 0; i < string.length; i++) {    // Loop through each character in the string
  
  if ("aeiouAEIOU".includes(string[i])) {     // Checks if the character is a vowel
    
    Count++;                         // If the string is vowel, counter number increases
  }
}
console.log("The number of vowels in", string, "is:", Count);