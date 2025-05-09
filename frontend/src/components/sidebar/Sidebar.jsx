// src/components/sidebar/Sidebar.jsx
import React from "react";
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";

const Sidebar = () => {
  return (
    <div className="p-4 flex flex-col bg-gray-800 text-white w-full sm:w-[300px] md:w-[350px] h-full border-r border-gray-700 shadow-lg">
      <SearchInput />
      <div className="border-b border-gray-700 my-3" /> <Conversations />
      <LogoutButton />
    </div>
  );
};
export default Sidebar;
