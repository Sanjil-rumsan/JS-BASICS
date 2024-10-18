// 4. Write a JavaScript function to get the number of occurrences of each letter in a specified string.

function countLetterOccurrences(str) {
    const letterCount = {}; 

    for (let char of str) {
        char = char.toLowerCase();
        if (char >= 'a' && char <= 'z') {
            if (letterCount[char]) {
                letterCount[char]++;
            } else {
                letterCount[char] = 1;
            }
        }
    }
    return letterCount; // Return the object containing letter counts
}

let exampleString = 'The quick brown fox jumps over the lazy dog';
let result = countLetterOccurrences(exampleString);

console.log("Letter occurrences:", result);