let output = "";
for (var i = 0; i < 31; i++) {
  if (i % 15 === 0) {
    output += "FizzBuzz ";
  } else if (i % 3 === 0) {
    output += "FizzBuzz ";
  } else if (i % 5 === 0) {
    output += "FizzBuzz ";
  } else {
    output += `${i} `;
  }
}
console.log(output);
