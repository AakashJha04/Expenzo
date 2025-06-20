import React from "react";
import { Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import '../resources/auth.css'
import axios from "axios";

function Login() {
   const navigate = useNavigate();
   const onFinish= async (values)=>{
    console.log(values)
    try {
      const response = await axios.post('/api/users/login', values);
      localStorage.setItem('expenzo-user', JSON.stringify({...response.data, password:''}))
      message.success("REGISTRATION SUCCESSFULL");
      navigate('/home');
    } catch (error) {
      message.error("Something went wrong");
    }
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
