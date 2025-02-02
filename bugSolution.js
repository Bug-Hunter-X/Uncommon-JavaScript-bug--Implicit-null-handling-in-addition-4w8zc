function foo(a, b) {
  if (a === null && b === null) {
    return 0; // Handle both null values explicitly
  } else if (a === null || b === null) {
    return 0; // Handle single null value
  }
  return a + b; // Perform addition
}

console.log(foo(null, 5)); // Output: 0
console.log(foo(10, null)); // Output: 0
console.log(foo(10, 5)); // Output: 15
console.log(foo(null, null)); //Output: 0