import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-12 p-3 gap-3 ">
      <div className="col-span-3">
        <Sidebar />
      </div>
      <div className="col-span-9 bg-gray-100 rounded-lg">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
