// src/pages/Home.jsx (or wherever it's located)
import React from "react";
import MessageContainer from "../components/messages/MessageContainer";
import Sidebar from "../components/sidebar/Sidebar";

const Home = () => {
  return (
    // h-screen ensures it takes full viewport height
    // flex is the primary layout driver
    // The background classes are for a glassmorphism effect on the page's backdrop
    // You might want a solid background on the body or html tag in your global CSS (e.g., index.css)
    // for the blur to be effective, e.g., body { background-image: url(...); background-size: cover; }
    <div className="flex h-[700px] overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20">
      {/* 
        If you want the blur to be *within* the app, e.g. Sidebar and MessageContainer
        sit on top of a blurred background image *for the app itself*, then this Home div
        would need a background image, and its children (Sidebar, MessageContainer) would
        need their `bg-opacity` adjusted for glassmorphism.

        Current setup: Home is slightly transparent & blurs what's BEHIND the browser window.
        Sidebar & MessageContainer have more opaque backgrounds.
      */}
      <Sidebar />
      <MessageContainer /> {/* This will take flex-1 (remaining width) */}
    </div>
  );
};
export default Home;
