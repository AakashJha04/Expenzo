const express = require("express");
const moment = require("moment");
const Transaction = require("../models/Transaction");
const router = express.Router();

// Route to add a new transaction
router.post("/add-transaction", async function (req, res) {
  try {
    const newTransaction = new Transaction(req.body);
    await newTransaction.save();
    res.send("New Transaction Added successfully");
  } catch (error) {
    console.error("Error adding transaction:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Route to get all transactions from last 7 days for a user
router.post("/get-all-transactions", async (req, res) => {
  try {
    const { userid } = req.body;

    const transactions = await Transaction.find({
      userid: userid,
      date: {
        $gte: moment().subtract(30, "days").toDate(),
      },
    });

    res.send(transactions);
  } catch (error) {
    console.error("Error fetching transactions:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
