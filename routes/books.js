const express = require("express");
const authenticateJWT = require("../middleware/auth");
const authorizeRoles = require("../middleware/authorizeRoles");
const Book = require("../models/Book"); // Ensure you create Book model
const router = express.Router();

// Public route: Get all books
router.get("/", async (req, res) => {
  const books = await Book.find();
  res.json(books);
});

// Admin-only: Add a book
router.post("/", authenticateJWT, authorizeRoles("admin"), async (req, res) => {
  const { title, author, description } = req.body;
  const book = new Book({ title, author, description });
  await book.save();
  res.status(201).json(book);
});

module.exports = router;
