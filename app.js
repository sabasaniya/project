const express = require('express');
const app=express();

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a number: ', (number) => {
  if (isNaN(number)) {
    console.log('Please enter a valid number.');
  } else {
    if (number % 2 === 0) {
      console.log(${number} is even.);
    } else {
      console.log(${number} is odd.);
    }
  }
  rl.close();
});
app.listen(3020, () => {
    console.log("Server is running on port 3020");
});