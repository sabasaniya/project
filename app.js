// Import readline module for user input
const readline = require('readline');
const app=express();

// Create an interface for input and output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Ask the user for a number
rl.question('Enter a number: ', (input) => {
    // Convert the input to a number
    const number = parseInt(input);

    // Check if the input is a valid number
    if (isNaN(number)) {
        console.log('Please enter a valid number.');
    } else {
        // Check if the number is even or odd
        if (number % 2 === 0) {
            console.log("${number} is an even number.");
        } else {
            console.log("${number} is an odd number.");
        }
    }

    // Close the readline interface
    rl.close();
});
// Start the server
app.listen(3020, () => {
    console.log("Server is running on port 3020");
});