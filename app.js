const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Main route - returns welcome message
app.get('/', (req, res) => {
  res.json({
    message: 'Hello from Rehan',
    version: '1.0.0',
    timestamp: new Date().toISOString()
  });
});

// Health check route - used to verify app is running
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'healthy' });
});

// Start the server
const server = app.listen(port, () => {
  console.log(`Application running on port ${port}`);
});

module.exports = { app, server };