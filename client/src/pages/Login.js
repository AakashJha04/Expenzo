import React from "react";
import { Form, Input } from "antd";
import { Link } from "react-router-dom";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import '../resources/auth.css'

function Login() {
   

   const onFinish=(values)=>{
    console.log(values)
   }
  

  return (
    <div
      className="register d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="row w-100 justify-content-center align-items-center h-100">

        {/* Form Section */}
        <div className="col-md-4">
             <h1>Expenzo Login</h1>
             <hr></hr>
             <br/>
          <Form layout="vertical" onFinish={onFinish}>
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
              <Link to="/register">Not Registered? Click here to register</Link>
              <button className="btn btn-primary" type="submit">Register</button>
            </div>
          </Form>
        </div>


        {/* Lottie Animation */}
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


      </div>
    </div>
  );
}

export default Login;
