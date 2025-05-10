import { Outlet } from "react-router-dom";
import Sidebar from "../sideBar";
import { useState } from "react";

const AppLayOut = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div className="flex md:h-screen bg-gray-200">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      <main
        className={`flex-1 h-full ${isSidebarOpen ? "md:ml-64 transition-all" : ""}`}
      >
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayOut;
