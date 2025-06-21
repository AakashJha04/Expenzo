import React from "react";
import "../resources/analytics.css";
import { Progress } from "antd";

function Analytics({ transactions }) {
  const totalTransaction = transactions.length;

  const totalIncomeTransactionArr = transactions.filter(
    (transaction) => transaction.type === "income"
  );
  const totalExpenseTransactionArr = transactions.filter(
    (transaction) => transaction.type === "expense"
  );

  const totalIncomeTransaction = totalIncomeTransactionArr.length;
  const totalExpenseTransaction = totalExpenseTransactionArr.length;

  const totalIncomeTransactionPercentage =
    totalTransaction === 0
      ? 0
      : (totalIncomeTransaction / totalTransaction) * 100;

  const totalExpenseTransactionPercentage =
    totalTransaction === 0
      ? 0
      : (totalExpenseTransaction / totalTransaction) * 100;

  const totalTurnOver = transactions.reduce(
    (acc, transaction) => acc + transaction.amount,
    0
  );

  const totalIncomeTurnOver = totalIncomeTransactionArr.reduce(
    (acc, transaction) => acc + transaction.amount,
    0
  );

  const totalExpenseTurnOver = totalExpenseTransactionArr.reduce(
    (acc, transaction) => acc + transaction.amount,
    0
  );

  const totalIncomeTurnOverPercentage =
    totalTurnOver === 0 ? 0 : (totalIncomeTurnOver / totalTurnOver) * 100;

  const totalExpenseTurnOverPercentage =
    totalTurnOver === 0 ? 0 : (totalExpenseTurnOver / totalTurnOver) * 100;

  const categories = [
    "salary",
    "freelance",
    "food",
    "entertainment",
    "education",
    "medical",
    "tax",
    "rent",
    "travel",
    "inventment",
    "others",
  ];

  return (
    <div className="analytics">
      <div className="row">
        <div className="col-md-4 mt-3">
          <div className="transactions-count">
            <h4>Total Transactions : {totalTransaction}</h4>
            <hr />
            <h5>Income: {totalIncomeTransaction}</h5>
            <h5>Expense: {totalExpenseTransaction}</h5>

            <div className="progress-bars">
              <Progress
                className="mx-5"
                strokeColor="green"
                type="circle"
                percent={totalIncomeTransactionPercentage.toFixed(0)}
              />
              <Progress
                strokeColor="red"
                type="circle"
                percent={totalExpenseTransactionPercentage.toFixed(0)}
              />
            </div>
          </div>
        </div>

        <div className="col-md-4 mt-3">
          <div className="transactions-count">
            <h4>Total TurnOver : ₹{totalTurnOver}</h4>
            <hr />
            <h5>Income: ₹{totalIncomeTurnOver}</h5>
            <h5>Expense: ₹{totalExpenseTurnOver}</h5>

            <div className="progress-bars">
              <Progress
                className="mx-5"
                strokeColor="green"
                type="circle"
                percent={totalIncomeTurnOverPercentage.toFixed(2)}
              />
              <Progress
                strokeColor="red"
                type="circle"
                percent={totalExpenseTurnOverPercentage.toFixed(2)}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <div className="income-category-analysis">
            <h3>Income - category wise</h3>
            {
              categories.map((category)=>{
                const amount= transactions.filter((t) => t.type==="income" && t.category === category)
                .reduce((acc, t) => acc + t.amount, 0);
                return (
                  amount>0 && <div className="category-card">
                    <h5>{category}</h5>
                    <Progress percent={((amount/totalIncomeTurnOver)*100).toFixed(1)}/>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
