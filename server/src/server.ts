const express = require('express');
import { Request, Response, NextFunction } from 'express';

const app = express();
const PORT = 3001;
const server = require('http').Server(app);

// Middleware to log when a user connects
app.use((req: Request, res: Response, next: NextFunction) => {
  console.log('A user has connected');
  next();
});

// Route to handle root URL
app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to the server!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

server.listen(process.env.PORT || 3001, function () {
  console.log("Ehi, I'm listening 🤟: ");
});
