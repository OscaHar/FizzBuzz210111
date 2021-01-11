let output = "";

for (var i = 1; i < 31; i++) i % 15 === 0 ? (output += "FizzBuzz ") : i % 5 === 0 ? (output += "Buzz ") : i % 3 === 0 ? (output += "Fizz "): (output += `${i} `);

console.log(output);