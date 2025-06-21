const express = require('express');
const cors = require('cors');
const dbConnect = require('./dbConnect');
const app = express();
require('dotenv').config();

const allowedOrigins = [
  'http://localhost:3000',
  'https://expenzo-frontend-j6wb.onrender.com'
];

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like Postman)
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      return callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true // Optional — set to false if not using cookies/sessions
}));

app.use(express.json());

// Routes
const userRoute = require('./routes/userRoute');
const transactionRoute = require('./routes/transactionRoute');

app.use('/api/users/', userRoute);
app.use('/api/transaction', transactionRoute);

app.get('/', (req, res) => {
  res.send('HELLO WORLD JI');
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`SERVER IS LISTENING AT ${PORT}`));
