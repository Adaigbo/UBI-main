import React, { Fragment, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.scss";
import Loader from "./layouts/Loader/Loader";
import Auth from "./Authentication/auth";
import Users from "./components/Users/Users";
import MyProfile from "./components/MyProfile/MyProfile";
import UsersServices from "./services/UsersServices";
import Utils from "./utils/Utils";
import Permission from "./components/Permission/Permission";


const Landingpageapp = React.lazy(() => import("./components/Landingpageapp"));
const App = React.lazy(() => import("./components/app"));
// AdvanceUi
const Themepage = React.lazy(() => import('./components/Themepage'))
const Carousels = React.lazy(() => import("./components/AdvanceUI/Carousels/Carousels"))
//Cryptocurrencies
const History = React.lazy(() => import("./components/Cryptocurrencies/Transcations/Transcations"))
// E-commerce
const Cart = React.lazy(() => import("./components/ECommerce/ECCart/ECCart"))
const Checkout = React.lazy(() => import("./components/ECommerce/Checkout/Checkout"))
const Dashboard = React.lazy(() => import("./components/ECommerce/ECDashboard/ECDashboard"))
const Order = React.lazy(() => import("./components/ECommerce/Orders/Orders"))
const Productdeatils = React.lazy(() => import("./components/ECommerce/Productdeatils/Productdeatils"))
const Products = React.lazy(() => import("./components/ECommerce/Products/Products"))
// Elements
const Alerts = React.lazy(() => import("./components/Elements/Alerts/Alerts"))
// Pages
const Faq = React.lazy(() => import("./components/Pages/Faq/Faq"))
const Notification = React.lazy(() => import("./components/Pages/NotificationList/NotificationList"))
const MessageDanger = React.lazy(() => import("./components/Pages/MessageDanger/MessageDanger"))
const MessageWarning = React.lazy(() => import("./components/Pages/MessageWarning/MessageWarning"))
const Messagesuccess = React.lazy(() => import("./components/Pages/Messagesuccess/Messagesuccess"))
const Aboutus = React.lazy(() => import("./components/Pages/Aboutus/Aboutus"))
// coustom pages
const Error505 = React.lazy(() => import("./components/Custompages/Error-505/Error-505"))
const Error404 = React.lazy(() => import("./components/Custompages/Error1-404/Error-404"))
const Signin = React.lazy(() => import("./components/Custompages/Signin/Signin"))
const Signup = React.lazy(() => import("./components/Custompages/Signup/Signup"))
const Lockscreen = React.lazy(() => import("./components/Custompages/Lockscreen/Lockscreen"))
const Resetpassword = React.lazy(() => import("./components/Custompages/Resetpassword/Resetpassword"))
const Forgotpassword = React.lazy(() => import("./components/Custompages/Forgotpassword/Forgotpassword"))
const Custompage = React.lazy(() => import("./components/Custompage"))
const Underconstructionpage = React.lazy(() => import("./components/UnderConstruction"))
const AuthLogin = React.lazy(() => import("./Authentication/Login"));
const AuthSignup = React.lazy(() => import("./Authentication/Signup"))

const Root = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <React.Suspense fallback={<Loader />}>
          <Routes>
            <Route path={`${process.env.PUBLIC_URL}/`}>
            </Route>
            <Route path={`${process.env.PUBLIC_URL}/`} element={<Auth />}>
              <Route index element={<AuthLogin />} />
              <Route
                path={`${process.env.PUBLIC_URL}/authentication/login`}
                element={<AuthLogin />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/authentication/signup`}
                element={<AuthSignup />}
              />
            </Route>
            <Route path={`${process.env.PUBLIC_URL}/`}
              element={<App />}>
              <Route>
                <Route
                  path={`${process.env.PUBLIC_URL}/dashboard`}
                  element={<Dashboard />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/users`}
                  element={<Users />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/permissions`}
                  element={<Permission />}
                />
              </Route>
              {/* Settings */}
              <Route>
                <Route
                  path={`${process.env.PUBLIC_URL}/profile`}
                  element={<MyProfile />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/profile/:tab`}
                  element={<MyProfile />}
                />
              </Route>
              <Route
                path={`${process.env.PUBLIC_URL}/history`}
                element={<History />}
              />
              <Route>
                <Route
                  path={`${process.env.PUBLIC_URL}/cart`}
                  element={<Cart />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/cheackout`}
                  element={<Checkout />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/order`}
                  element={<Order />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/productdeatils`}
                  element={<Productdeatils />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/productdeatils/:id`}
                  element={<Productdeatils />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/products`}
                  element={<Products />}
                />
              </Route>

              {/* Element */}
              <Route
                path={`${process.env.PUBLIC_URL}/elements/alerts`}
                element={<Alerts />}
              />
              {/* // Adavance */}
              <Route>
                <Route
                  path={`${process.env.PUBLIC_URL}/advanceUI/carousels`}
                  element={<Carousels />}
                />
                {/* // Adavance-UI-end */}
              </Route>
              {/* Pages */}
              <Route>
                <Route
                  path={`${process.env.PUBLIC_URL}/pages/faq`}
                  element={<Faq />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/notificationlist`}
                  element={<Notification />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/aboutus`}
                  element={<Aboutus />}
                />
              </Route>
              {/* Errors */}
            </Route>

            <Route
              path={`${process.env.PUBLIC_URL}/pages/switcherpages`}
              element={<Themepage />}
            />
            {/* ........................................Custompage............................................... */}
            <Route path={`${process.env.PUBLIC_URL}/`} element={<Custompage />}>
              <Route
                path={`${process.env.PUBLIC_URL}/pages/messagesuccess`}
                element={<Messagesuccess />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/pages/messagewarning`}
                element={<MessageWarning />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/pages/messagedanger`}
                element={<MessageDanger />}
              />
              {/* custompages */}
              <Route
                path={`${process.env.PUBLIC_URL}/custompages/error404`}
                element={<Error404 />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/custompages/lockscreen`}
                element={<Lockscreen />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/custompages/error505`}
                element={<Error505 />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/custompages/forgotpassword`}
                element={<Forgotpassword />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/custompages/resetpassword`}
                element={<Resetpassword />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/custompages/signup`}
                element={<Signup />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/custompages/signin`}
                element={<Signin />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/custompages/underconstruction`}
                element={<Underconstructionpage />}
              />
            </Route>
            <Route path={`${process.env.PUBLIC_URL}/landingpage`} element={<Landingpageapp />} />
            {/* ........................................Errorpage............................................... */}
            <Route path="*" element={<Error404 />} />
          </Routes>
        </React.Suspense>
      </BrowserRouter>
    </Fragment>
  );
};



const MyApp = () => {
  const [me, setMe] = useState(null);

  useEffect(() => {
    loadMe();
  }, []);

  const loadMe = async () => {
    if (Utils.isLoggedIn()) {
      const me = await UsersServices.me();

      localStorage.setItem('ubi_user', JSON.stringify(me.data? me.data : null));
      setMe(me.data ? me.data : null);
      console.log(me);
    }
    else {
      localStorage.removeItem('ubi_user');
    }
  }

  return (
    <>
      {(me || !Utils.isLoggedIn()) ?
        <Root />
        :
        <div className="text-center">
          <div className="lds-ripple">
            <div></div>
            <div></div>
          </div>
        </div>
      }
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MyApp />);