const express  = require('express');
const dbConnect = require('./dbConnect');
const app = express();
app.use(express.json());

const userRoute = require('./routes/userRoute'); 
 
app.use('/api/users/', userRoute);

const PORT = 4000


app.get('/', (req,res) => {
    res.send("HELLO WORLD JI")
});


app.listen(PORT, () => console.log(`SERVER IS LISTENING AT ${PORT}`));

