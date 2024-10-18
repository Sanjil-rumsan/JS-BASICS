// Function to check if a number is prime


function isPrime(num) {
       if (num < 2) {
      return false;               // Numbers less than 2 are not prime
    }
         for (var i = 2; i < num; i++) {
          if (num % i === 0) {           // If the number is divisible by i, it's not prime
        return false;                   
      }
    }
         return true; 
  }
  
  let num = 4; 
  let result = isPrime(num);

  if (result) {
    console.log(num + " is prime.");  
  } else {
    console.log(num + " is not prime.");
  }