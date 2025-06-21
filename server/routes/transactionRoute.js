const express = require("express");
const Transaction = require("../models/Transaction");
const router = express.Router();

router.post("/add-transaction", async function (req, res) {
  try {
    const newTransaction = new Transaction(req.body);
    await newTransaction.save();
    res.send('New Transaction Added successfully')
  } catch (error) {
    res.status(500).json(error);
  }
});


router.post("/get-all-transactions", async(req, res)=>{
    try {
        const transaction = await Transaction.find({userid: req.body.userid});
        res.send(transaction);
    } catch (error) {
        res.status(500).json(error);
    }
})

module.exports = router;