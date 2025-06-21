import React, { useState } from 'react'
import { Form, Input, Modal, Select } from 'antd';
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "../component/Spinner";

function AddEditTransaction({setShowAddEditTransactionModal, showAddEditTransactionModal, getTransactions}) {

    const [loading, setLoading] = useState(false);
    const onFinish = async (values) => {
    try {
      const user = JSON.parse(localStorage.getItem("expenzo-user"))
      await axios.post("/api/transaction/add-transaction", {...values, userid: user._id});
      toast.success("🎉 Transaction added Successfully!", {
        position: "top-center",
        autoClose: 3000,
        theme: "colored",
      });
      getTransactions()
      setShowAddEditTransactionModal(false)
    } catch (error) {
      setLoading(false);
      toast.error("❌ Something went wrong!", {
        position: "top-center",
        autoClose: 3000,
        theme: "colored",
      });
    }
  };


  return (
    <div>
        {loading && <Spinner/>}
       <Modal title="Add Transaction"
      open={showAddEditTransactionModal} 
      onCancel={()=>setShowAddEditTransactionModal(false)}
      footer={false}
      >
      <Form layout='vertical' onFinish={onFinish}>
        <Form.Item label="Amount" name='amount'>
          <Input type='text'/>
        </Form.Item>
        <Form.Item label="Type" name='type'>
          <Select>
            <Select.Option value='income'>Income</Select.Option>
            <Select.Option value='expense'>Expense</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Category" name='category'>
          <Select>
          <Select.Option value='salary'>salary</Select.Option>
          <Select.Option value='freelance'>freelance</Select.Option>
          <Select.Option value='food'>food</Select.Option>
          <Select.Option value='entertainment'>entertainment</Select.Option>
          <Select.Option value='education'>education</Select.Option>
          <Select.Option value='medical'>medical</Select.Option>
          <Select.Option value='tax'>tax</Select.Option>
          <Select.Option value='rent'>rent</Select.Option>
          <Select.Option value='others'>others</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Date" name='date'>
          <Input type='date'/>
        </Form.Item>
        <Form.Item label="Reference" name='reference'>
          <Input type='text'/>
        </Form.Item>
        <Form.Item label="Description" name='description'>
          <Input type='text'/>
        </Form.Item>

        <div className='d-flex justify-content-end'>
          <button className='primary' type='submit'>SAVE</button>
        </div>
      </Form>
     </Modal>
    </div>
  )
}

export default AddEditTransaction
