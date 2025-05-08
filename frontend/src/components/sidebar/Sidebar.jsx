// src/components/sidebar/Sidebar.jsx
import React from "react";
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";

const Sidebar = () => {
  return (
    // w-full on small screens, fixed width on medium and up. h-full is important.
    <div className="p-4 flex flex-col bg-gray-800 text-white w-full sm:w-[300px] md:w-[350px] h-full border-r border-gray-700 shadow-lg">
      <SearchInput />
      <div className="border-b border-gray-700 my-3" />{" "}
      {/* Replaced DaisyUI divider */}
      {/* Conversations will take up available space */}
      <Conversations />
      {/* LogoutButton will be pushed to the bottom by mt-auto in its own div */}
      <LogoutButton />
    </div>
  );
};
export default Sidebar;
