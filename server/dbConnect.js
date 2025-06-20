const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://aakash:aakash@cluster0.6nf8xkb.mongodb.net/expenzo", {
    useNewUrlParser:true,
    useUnifiedTopology: true
});
const connection = mongoose.connection 

connection.on('error', err => console.log(err));

connection.on('connected', () => console.log("MONGODB CONNECTION SUCCESSFUL"))
