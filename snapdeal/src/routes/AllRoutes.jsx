import React from "react";
import { Routes, Route } from "react-router-dom";
import Mens from "../pages/Mens";
import Womens from "../pages/Womens";
import Electronics from "../pages/Electronics";
import HomeLiving from "../pages/HomeLiving";
import Accessories from "../pages/Accessories";
import TopSlider from "../section/topslider/TopSlider";
function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<TopSlider/>} />
        <Route path="/mens" element={<Mens />} />
        <Route path="/womens" element={<Womens />} />
        <Route path="/electronics" element={<Electronics />} />
        <Route path="/homeandliving" element={<HomeLiving />} />
        <Route path="/accessories" element={<Accessories />} />
        
      </Routes>
    </>
  );
}

export default AllRoutes;
