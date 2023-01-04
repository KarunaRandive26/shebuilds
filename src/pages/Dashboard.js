import React from "react";
import Sidebar from "../components/SideBar";
import {Routes, Route} from "react-router-dom";
import DashPage from "../components/DashPage";

const Dashboard = () => {
    return (
        <>
        
        <Routes>
          <Route path="/" element={<DashPage/>} />
          <Route path="/dashpage" element={<DashPage/>} />
          <Route path="/about" element={<></>} />
          <Route path="/comment" element={<></>} />
          <Route path="/analytics" element={<></>} />
          <Route path="/product" element={<></>} />
          <Route path="/productList" element={<></>} />
        </Routes>
        
          
        </>
    );
};

export default Dashboard;