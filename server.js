// backend/server.js
const express = require('express');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv');
dotenv.config();


// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

// Additional example route with a parameter
app.post('/api/greet', (req, res) => {
  const { name } = req.body;
  res.json({ message: `Hello, ${name}! Welcome to our app.` });
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
