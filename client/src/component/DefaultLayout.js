import React from "react";
import { Button } from "antd";
import { LogoutOutlined } from "@ant-design/icons";
import "../resources/default-layout.css";

function DefaultLayout(props) {
  const user = JSON.parse(localStorage.getItem("expenzo-user"));

  const handleLogout = () => {
    localStorage.removeItem("expenzo-user");
    window.location.href = "/login"; // redirect to login
  };

  return (
    <div className="layout">
      <div className="header d-flex justify-content-between align-items-center">
        <div>
          <h1 className="logo">Expenzo</h1>
        </div>
        <div className="d-flex align-items-center gap-2">
          <h1 className="username mb-0">{user.name}</h1>
          <Button
            type="primary"
            danger
            shape="circle"
            icon={<LogoutOutlined />}
            onClick={handleLogout}
          />
        </div>
      </div>

      <div className="content">{props.children}</div>
    </div>
  );
}

export default DefaultLayout;
