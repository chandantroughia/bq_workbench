// server.js
const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS for all routes
app.use(cors());
// Parse incoming JSON payloads
app.use(express.json());

// Define your API endpoint for running a query
app.post('/api/query', (req, res) => {
  const { query } = req.body;
  
  console.log("Received query:", query);
  
  // TODO: Process the query. For now, we'll just return dummy data.
  const dummyResults = [
    { id: 1, name: 'Alice', role: 'Admin' },
    { id: 2, name: 'Bob', role: 'User' }
  ];
  
  res.json(dummyResults);
});

// Start the server on port 5000 (or any port you prefer)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});