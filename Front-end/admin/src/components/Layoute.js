
import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import Header from "./Header/Header";
import { Outlet } from "react-router-dom";

const Layoute = () => {
  return (
    <div className="flex h-screen ">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <Header />
        <div className="p-6 h-full w-[85%] overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layoute;
