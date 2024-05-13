import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Utils from "../utils/Utils";


const Auth = () => {

  if (Utils.isLoggedIn()) {
    const dashboard = `${process.env.PUBLIC_URL}/dashboard`;
    return (<Navigate to={dashboard} />);
  }

  return (
    <div >
      <ToastContainer />
      <Outlet />
    </div>
  );
};

export default Auth;
