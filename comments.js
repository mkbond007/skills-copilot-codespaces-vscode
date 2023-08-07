// Create web server

// Import modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

// Create web server
const app = express();

// Use modules
app.use(bodyParser.json());
app.use(cors());

// Comments array
const comments = [];

// Get comments
app.get('/posts/:id/comments', (req, res) => {
  res.send(comments);
});

// Post comment
app.post('/posts/:id/comments', (req, res) => {
  const { content } = req.body;
  const commentId = uuidv4();
  const comment = { id: commentId, content, status: 'pending' };
  comments.push(comment);
  res.status(201).send(comments);
});

// Listen port
app.listen(4001, () => {
  console.log('Listening on 4001');
});
