import React, { Fragment, useEffect, useState, } from "react";
import Header from "../layouts/Header/Header";
import Sidebar from "../layouts/SideBar/SideBar";
import Footer from "../layouts/Footer/Footer";
import Switcher from "../layouts/Switcher/Switcher";
import { Navigate, Outlet } from "react-router-dom";
import Rightside from "../layouts/Rightside/Rightside";
import { Backtotop1 } from "../layouts/Backtotop/Backtotop";
import { ToastContainer } from "react-toastify";
import Utils from "../utils/Utils";
const App = () => {
  document.querySelector("body").classList.remove("error-1");
  document.querySelector("body").classList.remove("app", "sidebar-mini", "landing-page", "horizontalmenu")
  document.querySelector("body").classList.add("main-body", "leftmenu")
  const remove = () => {
    document.querySelector(".sidebar-right").classList.remove("sidebar-open");
    document.querySelector("body").classList.remove("main-sidebar-show");
    document.querySelector(".demo_changer").classList.remove("active");
    document.querySelector(".demo_changer").style.right = "-270px";
  };

  const [landing, setLanding] = useState(false);

  useEffect(() => {
    if (!landing && window.location == `${process.env.PUBLIC_URL}/landingpage`) {
      setLanding(true);
    }
  });

  if (!Utils.isLoggedIn()) {
    const dashboard = `${process.env.PUBLIC_URL}/`;
    return (<Navigate to={dashboard} />);
  }

  return (
    <Fragment >
      <ToastContainer />
      <div className="horizontalMenucontainer">
        <Switcher />
        <div className="page">
          <Header />
          <Sidebar />
          {!landing &&
            <>
              < div className={landing ? "" : `main-content side-content`}>
                <div className="main-container container-fluid" onClick={() => remove()}>
                  <div className="inner-body" >
                    <Outlet />
                  </div>
                </div>
              </div>
              <Rightside />
            </>
          }
        </div>
        <Backtotop1 />
        <Footer />
      </div>
    </Fragment >
  );
};
export default App;
