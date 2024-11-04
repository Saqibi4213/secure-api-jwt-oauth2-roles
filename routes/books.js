const express = require('express'); // Changed to single quotes
const authenticateJWT = require('../middleware/auth');
const authorizeRoles = require('../middleware/authorizeRoles'); // Changed to single quotes
const Book = require('../models/Book'); // Changed to single quotes
const router = express.Router();

// Public route: Get all books
router.get('/', async (req, res) => { // Changed to single quotes
  const books = await Book.find();
  res.json(books);
});

// Admin-only: Add a book
router.post('/', authenticateJWT, authorizeRoles('admin'), async (req, res) => { // Changed to single quotes
  const { title, author, description } = req.body;
  const book = new Book({ title, author, description });
  await book.save();
  res.status(201).json(book);
});

module.exports = router;
