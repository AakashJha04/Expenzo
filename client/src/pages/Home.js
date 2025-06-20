import React, { useState } from 'react'
import DefaultLayout from '../component/DefaultLayout'
import '../resources/transactions.css'
import { Form, Input, Modal, Select } from 'antd';

function Home() {
  const [showAddEditTransactionModal, setShowAddEditTransactionModal] = useState(false);
  const onFinish=(values)=>{
    console.log(values);
  }
  return (
    <DefaultLayout> 
      <div className="filter d-flex justify-content-between">
        <div>
        </div>

        <div>
          <button className='primary' onClick={()=>setShowAddEditTransactionModal(true)}>ADD NEW</button>
        </div>
      </div>

      <div className='table-analytics'>analytics</div>

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
        <Form.Item label="Description" name='Description'>
          <Input type='text'/>
        </Form.Item>

        <div className='d-flex justify-content-end'>
          <button className='primary' type='submit'>SAVE</button>
        </div>
      </Form>
     </Modal>
    </DefaultLayout>
  )
}

export default Home
