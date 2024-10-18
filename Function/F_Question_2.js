// 2. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string. 
// Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here. 
// Example string : 'The quick brown fox' Expected Output : 5

function countVowels(str) {
    const lowerCaseStr = str.toLowerCase();              // Convert the string to lowercase
           let vowelCount = 0;                           // Initialize a counter for vowels
    for (let i = 0; i < lowerCaseStr.length; i++) {
      
      if ('aeiou'.includes(lowerCaseStr[i])) {           // Check if the character is a vowel
        vowelCount++;                                     // Increase the vowel count
      }
    }
    return vowelCount;
  }
  
  let str = "The quick brown fox"
  let result = countVowels(str);

  console.log("Number of vowels in the string:", result); 