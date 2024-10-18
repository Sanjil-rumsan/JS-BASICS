// 8. Write a function to calculate compound interest based on the principle amount


function calCompoundInt(principal, rate, time, frequency) {                              // Function to calculate compound interest
    let totalAmount = principal * Math.pow((1 + rate / 100 / frequency), frequency * time);
    let interestEarned = totalAmount - principal;         // Calculates the interest earned
    return {
      totalAmount: totalAmount.toFixed(2),
      interestEarned: interestEarned.toFixed(2)
    };
  }
  
  let principal = 1000;             // Initial amount of money
  let rate = 5;                     // Interest rate (5%)
  let time = 10;                    // Number of years
  let frequency = 4;                // Interest is compounded 4 times a year
  
  let result = calCompoundInt(principal, rate, time, frequency);
  console.log("Total Amount: $" + result.totalAmount);
  console.log("Interest Earned: $" + result.interestEarned);