function count(n){
  let count = 0;
  
  // Loop through each digit of the number
  while(n > 0){
    let digit = n % 10; // Extract the last digit
    count++; // Increment count for each digit found
    n = Math.floor(n / 10); // Remove the last digit
  }
  
  return count; // Return the count of digits
}

console.log(count(5485665)); // Output: 7 (number of digits in 5485665)
