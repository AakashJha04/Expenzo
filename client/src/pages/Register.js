import React from "react";
import { Form, Input } from "antd";
import { Link } from "react-router-dom";
import { DotLottieReact } from "@lottiefiles/dotlottie-react"; // ✅ named import

function Register() {
  return (
    <div
      className="register d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="row w-100 justify-content-center align-items-center">
        {/* Lottie Animation */}
        <div className="col-md-5 text-center mb-4 mb-md-0">
          <DotLottieReact
            src="/expenzo_lottie.lottie"
            autoplay
            loop
            style={{ width: "300px", height: "300px" }}
          />
        </div>

        {/* Form Section */}
        <div className="col-md-5">
          <Form layout="vertical">
            <Form.Item label="Name" name="name">
              <Input placeholder="Enter your name" />
            </Form.Item>
            <Form.Item label="Email" name="email">
              <Input placeholder="Enter your email" />
            </Form.Item>
            <Form.Item label="Password" name="password">
              <Input.Password placeholder="Enter your password" />
            </Form.Item>

            <div className="d-flex justify-content-between align-items-center">
              <Link to="/login">Already Registered? Click here to login</Link>
              <button className="btn btn-primary">Register</button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Register;
