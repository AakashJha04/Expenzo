const express  = require('express');
const dbConnect = require('./dbConnect');
const app = express();
const PORT = 4000


app.get('/', (req,res) => {
    res.send("HELLO WORLD JI")
});

app.listen(PORT, () => console.log(`SERVER IS LISTENING AT ${PORT}`));

