import express from 'express';

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware to log when a user connects
app.use((req, res, next) => {
  console.log('A user has connected');
  next();
});

// Route to handle root URL
// Define a route for the root URL ('/')
app.get('*', (req, res) => {
  // Log a message when a user connects to the root URL
  console.log('A user has connected to the root URL');
  // console.log(req.session);
  res.send('Hello, world!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT} 🍕`);
});
