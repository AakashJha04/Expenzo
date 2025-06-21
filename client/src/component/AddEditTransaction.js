import React, { useState } from "react";
import { Form, Input, Modal, Select } from "antd";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "../component/Spinner";
import axiosInstance from '../utils/axiosInstance';

function AddEditTransaction({
  setShowAddEditTransactionModal,
  showAddEditTransactionModal,
  selectedItemForEdit,
  getTransactions,
  setSelectedItemForEdit,
}) {
  const [loading, setLoading] = useState(false);
  const onFinish = async (values) => {
    try {
      const user = JSON.parse(localStorage.getItem("expenzo-user"));
      if (selectedItemForEdit) {
        await axiosInstance.post("/api/transaction/edit-transaction", {
          payload:{
            ...values,
          userid: user._id,
          },
          transactionId: selectedItemForEdit._id,
        });
        getTransactions();
        toast.success("🎉 Transaction Updated Successfully!", {
          position: "top-center",
          autoClose: 3000,
          theme: "colored",
        });
      } else {
        await axiosInstance.post("/api/transaction/add-transaction", {
          ...values,
          userid: user._id,
        });
        getTransactions();
        toast.success("🎉 Transaction added Successfully!", {
          position: "top-center",
          autoClose: 3000,
          theme: "colored",
        });
      }

      setShowAddEditTransactionModal(false);
      setSelectedItemForEdit(null);
      setLoading(false);
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
      <Modal
        title={selectedItemForEdit ? "Edit Transaction" : "Add Transaction"}
        open={showAddEditTransactionModal}
        onCancel={() => setShowAddEditTransactionModal(false)}
        footer={false}
      >
        {loading && <Spinner />}
        <Form
          layout="vertical"
          onFinish={onFinish}
          initialValues={selectedItemForEdit}
        >
          <Form.Item label="Amount" name="amount">
            <Input type="text" />
          </Form.Item>
          <Form.Item label="Type" name="type">
            <Select>
              <Select.Option value="income">Income</Select.Option>
              <Select.Option value="expense">Expense</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Category" name="category">
            <Select>
              <Select.Option value="salary">Salary</Select.Option>
              <Select.Option value="freelance">Freelance</Select.Option>
              <Select.Option value="food">Food</Select.Option>
              <Select.Option value="entertainment">Entertainment</Select.Option>
              <Select.Option value="education">Education</Select.Option>
              <Select.Option value="medical">Medical</Select.Option>
              <Select.Option value="tax">Tax</Select.Option>
              <Select.Option value="rent">Rent</Select.Option>
              <Select.Option value="travel">Travel</Select.Option>
              <Select.Option value="inventment">Investment</Select.Option>
              <Select.Option value="others">Others</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Date" name="date">
            <Input type="date" />
          </Form.Item>
          <Form.Item label="Reference" name="reference">
            <Input type="text" />
          </Form.Item>
          <Form.Item label="Description" name="description">
            <Input type="text" />
          </Form.Item>

          <div className="d-flex justify-content-end">
            <button className="primary" type="submit">
              SAVE
            </button>
          </div>
        </Form>
      </Modal>
    </div>
  );
}

export default AddEditTransaction;
