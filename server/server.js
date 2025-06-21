const express  = require('express');
const cors = require('cors');
const dbConnect = require('./dbConnect');
const app = express();
app.use(cors({
  origin: 'https://expenzo-frontend-j6wb.onrender.com'
}));

app.use(express.json());
require('dotenv').config();


const userRoute = require('./routes/userRoute'); 
const transactionRoute = require('./routes/transactionRoute');
 
app.use('/api/users/', userRoute);
app.use('/api/transaction', transactionRoute);

const PORT = process.env.PORT || 4000


app.get('/', (req,res) => {
    res.send("HELLO WORLD JI")
});



app.listen(PORT, () => console.log(`SERVER IS LISTENING AT ${PORT}`));

