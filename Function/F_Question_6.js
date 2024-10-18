// 6. Write a JavaScript function that accepts a list of country names as input and returns the longest country name as output. 
// Sample function : Longest_Country_Name(["Australia", "Germany", "United States of America"]) Expected output : "United States of America"

function longestCountryName(countries) {
    let longestName = ''; 

    for (let country of countries) {
        if (country.length > longestName.length) {                      // Check if the current country name is longer than the longest found so far
            longestName = country;                                      // Updates the longest name
        }
    }
    return longestName;                                                 // Return the longest country name
}

let countryList = ["Australia", "Germany", "United States of America"];
let result = longestCountryName(countryList);

console.log("Longest country name is ", result);