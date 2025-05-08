// src/components/sidebar/LogoutButton.jsx
import React from "react";
import { BiLogOut } from "react-icons/bi";

const LogoutButton = () => {
  const handleLogout = () => {
    // Handle logout logic
    console.log("Logout clicked");
  };

  return (
    <div className="mt-auto p-2 border-t border-gray-700">
      {" "}
      {/* Added padding and border */}
      <button
        onClick={handleLogout}
        className="flex items-center gap-2 p-2 text-gray-300 hover:text-white hover:bg-red-500/80 rounded-md w-full transition-colors duration-150"
        aria-label="Logout"
      >
        <BiLogOut className="w-6 h-6" />
        <span className="font-medium">Logout</span>
      </button>
    </div>
  );
};
export default LogoutButton;
