const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const bookRoutes = require('./routes/books');

dotenv.config();

const app = express();

connectDB();

app.use(express.json());
app.use(morgan('dev'));
app.use(helmet());
app.use(cors());

app.use('/api/auth', authRoutes);
app.use('/api/books', bookRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to the Bookstore API');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on port ${PORT}`);
});
