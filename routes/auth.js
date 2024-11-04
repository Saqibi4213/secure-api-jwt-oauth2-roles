const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();

// Sign up
router.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Check if the email is already in use
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already in use' });
    }

    // Create a new user
    const user = new User({ username, email, password });
    await user.save();
    return res.status(201).json({ message: 'User registered successfully!' });
  } catch (error) {
    return res.status(500).json({ message: 'Server error' });
  }
});

// Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !(await user.comparePassword(password))) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }
  
  const token = jwt.sign(
    { id: user.id, role: user.role }, // Use user.id instead of user._id
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );
  
  return res.json({ token });
});

// Google Auth Route
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// Google Auth Callback Route
router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/' }), (req, res) => {
  // Successful authentication, redirect home or send JWT.
  const token = jwt.sign({ id: req.user.id, role: req.user.role }, process.env.JWT_SECRET, { expiresIn: '1h' }); // Use req.user.id instead of req.user._id
  res.redirect(`http://localhost:3000/?token=${token}`); // Redirect to your front-end with the token
});

module.exports = router;
