// Importing required dependencies
const axios = require('axios');
const moment = require('moment');

// Lambda handler function
exports.handler = async (event) => {
    try {
        // Making an HTTP GET request to GitHub's public API
        const response = await axios.get('https://api.github.com');
        
        // Returning a successful response with date and data from GitHub API
        return {
            statusCode: 200,
            body: JSON.stringify({
                message: 'Hello from Lambda!',
                date: moment().format('YYYY-MM-DD'),
                data: response.data
            }),
        };
    } catch (error) {
        // Returning an error response if the HTTP request fails
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message }),
        };
    }
};
