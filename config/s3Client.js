const AWS = require('aws-sdk');

// Configure AWS SDK
AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID, // Set this in your environment variables
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION, // E.g., 'us-east-1'
});

// Initialize S3 instance
const s3 = new AWS.S3();

module.exports = s3;
