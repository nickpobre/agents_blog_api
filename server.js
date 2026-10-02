const express = require('express');
const app = express();

// Basic middleware
app.use(express.json());

// Health check route
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK' });
});

// Placeholders for blog endpoints
app.get('/api/blog/posts', (req, res) => {
  res.status(501).json({ message: 'Blog posts endpoint not implemented' });
});

app.get('/api/blog/posts/:id', (req, res) => {
  res.status(501).json({ message: 'Blog post endpoint not implemented' });
});

app.get('/', (req, res) => {
  res.send('Blog API');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});