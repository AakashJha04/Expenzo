import React, { useState } from 'react'
import DefaultLayout from '../component/DefaultLayout'
import '../resources/transactions.css'
import AddEditTransaction from '../component/AddEditTransaction';

function Home() {
  const [showAddEditTransactionModal, setShowAddEditTransactionModal] = useState(false);
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

      {showAddEditTransactionModal && (
        <AddEditTransaction
         showAddEditTransactionModal={showAddEditTransactionModal}
         setShowAddEditTransactionModal={setShowAddEditTransactionModal}
         />)}

    </DefaultLayout>
  )
}

export default Home
