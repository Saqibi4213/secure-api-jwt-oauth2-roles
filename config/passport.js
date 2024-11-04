const passport = require('passport'); // Changed to single quotes
const GoogleStrategy = require('passport-google-oauth20').Strategy; // Changed to single quotes
const User = require('../models/User'); // Changed to single quotes

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: '/api/auth/google/callback', // Changed to single quotes
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        let user = await User.findOne({ googleId: profile.id });
        if (user) {
          return done(null, user);
        }

        user = await new User({
          googleId: profile.id,
          username: profile.displayName,
          email: profile.emails[0].value,
          role: 'user', // Changed to single quotes
        }).save();
        return done(null, user); // Added return statement to match the consistent-return rule
      } catch (err) {
        return done(err); // Added return statement to match the consistent-return rule
      }
    }
  )
);
