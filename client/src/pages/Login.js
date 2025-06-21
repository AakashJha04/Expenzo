import React, { useEffect, useState } from "react";
import { Form, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../resources/auth.css";
import axios from "axios";
import Spinner from "../component/Spinner";

function Login() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const onFinish = async (values) => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/login", values);
      localStorage.setItem(
        "expenzo-user",
        JSON.stringify({ ...response.data, password: "" })
      );
      setLoading(false);
      toast.success("🎉 Login Successful!", {
        position: "top-center",
        autoClose: 3000,
        theme: "colored",
      });
      // Delay navigation by 2 seconds
      setTimeout(() => {
      navigate("/home");
      }, 2000);
    } catch (error) {
      setLoading(false);
      toast.error("❌ Invalid Credentials", {
        position: "top-center",
        autoClose: 3000,
        theme: "colored",
      });
    }
  };

useEffect(()=>{
  if(localStorage.getItem("expenzo-user")){
    navigate('/home')
  }
})


  return (
    <div
      className="register d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      {loading && <Spinner/>}
      <div className="row w-100 justify-content-center align-items-center h-100">
        {/* Form Section */}
        <div className="col-md-4">
          <h1>Expenzo Login</h1>
          <hr />
          <br />
          <Form layout="vertical" onFinish={onFinish}>
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

            <div className="d-flex justify-content-between align-items-center">
              <Link to="/register">Not Registered? Click here to register</Link>
              <button className="btn btn-primary" type="submit">
                Login
              </button>
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
