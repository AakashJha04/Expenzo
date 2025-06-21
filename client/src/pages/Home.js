import React, { useEffect, useState } from 'react'
import DefaultLayout from '../component/DefaultLayout'
import '../resources/transactions.css'
import AddEditTransaction from '../component/AddEditTransaction';
import Spinner from "../component/Spinner";
import axios from 'axios';
import { toast } from 'react-toastify';
import { Table } from 'antd';
import moment from "moment";

function Home() {
  const [showAddEditTransactionModal, setShowAddEditTransactionModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [transactionsData, setTransactionData] = useState([]);
  
  const getTransactions=async()=>{
    try {
      const user = JSON.parse(localStorage.getItem( "expenzo-user"))
      setLoading(true);
      const response = await axios.post("/api/transaction/get-all-transactions", {userid: user._id});
      setTransactionData(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error("❌ Something went wrong", {
        position: "top-center",
        autoClose: 3000,
        theme: "colored",
      });
    }
  }

  useEffect(()=>{
    getTransactions();
  },[]);


  const columns = [
    {
      title: "Date",
      dataIndex: "date",
      render:(record)=><label>{moment(record.date).format('YYYY-MM-DD')}</label>
    },
     {
      title: "Amount",
      dataIndex: "amount"
    },
     {
      title: "Category",
      dataIndex: "category"
    },
     {
      title: "Reference",
      dataIndex: "reference"
    },
  ]


  return (
    <DefaultLayout> 
      {loading && <Spinner/>}
      <div className="filter d-flex justify-content-between">
        <div>
        </div>

        <div>
          <button className='primary' onClick={()=>setShowAddEditTransactionModal(true)}>ADD NEW</button>
        </div>
      </div>

      <div className='table-analytics'>
        <div className='table'>
          <Table columns={columns} dataSource={transactionsData}/>
        </div>
      </div>

      {showAddEditTransactionModal && (
        <AddEditTransaction
         showAddEditTransactionModal={showAddEditTransactionModal}
         setShowAddEditTransactionModal={setShowAddEditTransactionModal}
         getTransactions={getTransactions}
         />)}

    </DefaultLayout>
  )
}

export default Home
