import React from "react";
import { Form, Input, message } from "antd";
import { Link } from "react-router-dom";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import "../resources/auth.css";
import axios from "axios";

function Register() {
  const onFinish = async (values) => {
    try {
      await axios.post("/api/users/register", values);
      message.success("Registration Successful");
    } catch (error) {
      message.error("Something went wrong");
    }
  };

  return (
    <div className="register">
      <div className="row w-100 justify-content-center align-items-center h-100">
        {/* Lottie Section */}
        <div className="col-md-5 text-center mb-4 mb-md-0">
          <div className="lottie">
            <DotLottieReact
              src="/expenzo_lottie.lottie"
              autoplay
              loop
              style={{ width: "300px", height: "300px" }}
            />
          </div>
        </div>

        {/* Form Section */}
        <div className="col-md-5">
          <h1>Expenzo Registration</h1>
          <hr />
          <Form layout="vertical" onFinish={onFinish}>
            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: "Please enter your name" }]}
            >
              <Input placeholder="Enter your name" />
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: "Please enter your email" }]}
            >
              <Input placeholder="Enter your email" />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: "Please enter your password" }]}
            >
              <Input.Password placeholder="Enter your password" />
            </Form.Item>

            <div className="d-flex justify-content-between align-items-center mt-3">
              <Link to="/login">Already Registered? Login</Link>
              <button className="btn btn-primary" type="submit">
                Register
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Register;
