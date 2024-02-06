import React from "react";
import { Routes, Route } from "react-router-dom";
import Mens from "../pages/Mens";
import Womens from "../pages/Womens";
import Electronics from "../pages/Electronics";
import Accessories from "../pages/Accessories";
import TopSlider from "../section/topslider/TopSlider";
import Register from "../pages/Register";
import Login from "../pages/Login";
import ResetPassword from "../pages/ResetPassword";
import ForgetPassword from "../pages/ForgetPassword";
import OtpVerify from "../pages/OtpVerify";
import OtpResetPass from "../pages/OtpResetPass";
import AddToCart from "../pages/AddToCart";
import Jewelry from "../pages/Jewelry";
import Mobiles from "../pages/Mobiles";

function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<TopSlider />} />
        <Route path="/mens" element={<Mens />} />
        <Route path="/womens" element={<Womens />} />
        <Route path="/electronics" element={<Electronics />} />
        <Route path="/jewelry" element={<Jewelry />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="/otpverification" element={<OtpVerify />} />
        <Route path="/forgetbyotp" element={<OtpResetPass />} />
        <Route path="/addtocart" element={<AddToCart />} />
        <Route path="/mobiles" element={<Mobiles />} />
      </Routes>
    </>
  );
}

export default AllRoutes;
