import React from "react";
import '../resources/default-layout.css'

function DefaultLayout(props) {
  const user = JSON.parse(localStorage.getItem("expenzo-user"));
  return (
    <div className="layout">
      <div className="header d-flex justify-content-between align-items-center">
        <div>
          <h1 className="logo">Expenzo</h1>
        </div>
        <div>
            <h1 className="username">
                {user.name}
            </h1>
        </div>
      </div>

      <div className="content">{props.children}</div>

    </div>
  );
}

export default DefaultLayout;
