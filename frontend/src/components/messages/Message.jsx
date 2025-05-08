// src/components/messages/Message.jsx
import React from "react";

const Message = ({ message, timestamp, isSender, avatarUrl }) => {
  const bubbleClasses = isSender
    ? "bg-sky-500 text-white"
    : "bg-gray-700 text-gray-200"; // Darker theme for received
  const alignmentClasses = isSender
    ? "self-end flex-row-reverse"
    : "self-start flex-row";

  return (
    <div className={`flex items-end gap-2 py-2 px-1 ${alignmentClasses}`}>
      <div className="avatar">
        {" "}
        {/* Simple avatar structure */}
        <div className="w-8 h-8 rounded-full flex-shrink-0">
          <img
            src={avatarUrl || "https://avatar.iran.liara.run/public/boy"} // Default avatar
            alt="User Avatar"
            className="rounded-full object-cover w-full h-full"
          />
        </div>
      </div>
      <div
        className={`chat-bubble max-w-xs md:max-w-md lg:max-w-lg px-4 py-2 rounded-lg shadow ${bubbleClasses}`}
      >
        <p className="text-sm break-words">{message}</p>
      </div>
      <div className="text-xs text-gray-500 self-end pb-1 flex-shrink-0">
        {timestamp}
      </div>
    </div>
  );
};

export default Message;
