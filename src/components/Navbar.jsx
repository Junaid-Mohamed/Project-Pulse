import { useState } from "react";
import { CiBellOn } from "react-icons/ci";
import { RiArrowDropDownLine } from "react-icons/ri";

const Navbar = () => {

    const [activeTab, setActiveTab] = useState("Dashboard");
    const hasNotification = true; // Simulating notification state


    return (
      <nav className="bg-gray-700 text-white px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-widest"><span className="text-teal-400" >H</span> O U R S</div>
  
        {/* Navigation Links */}
        <ul className="flex space-x-6">
        {["Dashboard", "Projects", "Team", "Clients", "Time", "Reports"].map(
          (item, index) => (
            <li
              key={index}
              className={`cursor-pointer relative ${
                activeTab === item ? "border-b-2 border-teal-400" : ""
              }`}
              onClick={() => setActiveTab(item)}
            >
              {item}
            </li>
          )
        )}
      </ul>

  
        {/* Profile and Bell icon */}
        <div className="flex items-center space-x-4 relative" >
        <div className="relative">
          <CiBellOn className="text-2xl cursor-pointer hover:text-blue-400" />
          {hasNotification && (
            <span className="absolute top-0.5 right-0.5 w-1.5 h-1.5 bg-red-500 rounded-full"></span>
          )}
        </div>

        {/* Profile Section with Dropdown */}
        <div className="flex items-center space-x-2 cursor-pointer">
          <img
            src="https://randomuser.me/api/portraits/men/75.jpg"
            alt="User"
            className="w-8 h-8 rounded-full"
          />
          <span>Mario</span>
          <RiArrowDropDownLine className="text-xl" />
        </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  