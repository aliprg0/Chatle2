// src/pages/Home.jsx (or wherever it's located)
import React from "react";
import MessageContainer from "../components/messages/MessageContainer";
import Sidebar from "../components/sidebar/Sidebar";

const Home = () => {
  return (
    <div className="flex h-[700px] overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20">
      <Sidebar />
      <MessageContainer />
    </div>
  );
};
export default Home;
