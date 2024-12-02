const express = require('express');
const app = express();

// Define a route to check even or odd
app.get('/evenodd', (req, res) => {
    // Get the number from the query parameter
    const number = parseInt(req.query.number);

    // Validate if a number is provided and is valid
    if (isNaN(number)) {
        return res.status(400).send("Please provide a valid number as a query parameter, e.g., /evenodd?number=10");
    });

    // Check if the number is even or odd
    const result = (number % 2 === 0) ? "even" : "odd";

    // Respond with the result
    res.send(The number ${number} is ${result});
});

// Start the server
app.listen(3020, () => {
    console.log("Server is running on port 3020");
});