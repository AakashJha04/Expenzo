import React from "react";
import '../resources/analytics.css';
import { Progress } from 'antd';

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
    (totalIncomeTransaction / totalTransaction) * 100;
  const totalExpenseTransactionPercentage =
    (totalExpenseTransaction / totalTransaction) * 100;

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
              <Progress className='mx-5' strokeColor='green' type='circle' percent={totalIncomeTransactionPercentage.toFixed(0)}/>
              <Progress strokeColor='red' type='circle' percent={totalExpenseTransactionPercentage.toFixed(0)}/>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
