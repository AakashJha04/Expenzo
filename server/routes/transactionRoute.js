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


router.post("/edit-transaction", async function (req, res) {
  try {
    await Transaction.findOneAndUpdate({_id : req.body.transactionId}, req.body.payload)
    res.send("Transaction Updated successfully");
  } catch (error) {
    console.error("Error adding transaction:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});


router.post("/delete-transaction", async function (req, res) {
  try {
    await Transaction.findOneAndDelete({_id : req.body.transactionId})
    res.send("Transaction Deleted Successfully");
  } catch (error) {
    console.error("Error adding transaction:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});


// Route to get all transactions based on frequency or custom date range
router.post("/get-all-transactions", async (req, res) => {
  const { frequency, selectedRange, userid, type } = req.body;

  try {
    let dateFilter = {};

    if (frequency !== "custom") {
      dateFilter.date = {
        $gte: moment().subtract(Number(frequency), "d").toDate()
      };
    } else if (selectedRange && selectedRange.length === 2) {
      dateFilter.date = {
        $gte: new Date(selectedRange[0]),
        $lte: new Date(selectedRange[1])
      };
    }

    const transactions = await Transaction.find({
      userid,
      ...dateFilter,
      ...(type!=='all' && {type})
    });

    res.send(transactions);
  } catch (error) {
    console.error("Error fetching transactions:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
