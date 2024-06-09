function transformString(input) {
  const length = input.length;

  if (length % 15 === 0) {
    // Perform both operations: reverse and replace each character with its ASCII code
    return input
      .split("")
      .reverse()
      .map((char) => char.charCodeAt(0))
      .join(" ");
  } else if (length % 3 === 0) {
    // Reverse the string
    return input.split("").reverse().join("");
  } else if (length % 5 === 0) {
    // Replace each character with its ASCII code
    return input
      .split("")
      .map((char) => char.charCodeAt(0))
      .join(" ");
  } else {
    // If none of the conditions match, return the string as is
    return input;
  }
}

// Example usage:
console.log(transformString("Hamburger")); // Output: "regrubmaH"
console.log(transformString("Pizza")); // Output: "80 105 122 122 97"
console.log(transformString("Chocolate Chip Cookie")); // Output: "eikooCpihCetalocohC"
