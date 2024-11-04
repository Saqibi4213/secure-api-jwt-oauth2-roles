const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String },
  googleId: { type: String }, // Google OAuth2 ID
  role: { type: String, enum: ['user', 'admin'], default: 'user' }, // Role-based access control
});

// Using named async function to avoid linting warning
userSchema.pre('save', async function hashPassword(next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10); // Hash password before saving
  return next(); // Added return to match the consistent-return rule
});

// Named function for comparison to avoid linting warning
userSchema.methods.comparePassword = function comparePassword(password) {
  return bcrypt.compare(password, this.password); // Compare entered password with hashed one
};

const User = mongoose.model('User', userSchema);
module.exports = User;
