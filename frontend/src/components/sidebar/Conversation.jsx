// src/components/sidebar/Conversation.jsx
import React from "react";

const Conversation = ({ name, avatarUrl, lastMessage, emoji, isActive }) => {
  const activeClasses = isActive ? "bg-sky-600/70" : "hover:bg-gray-700/50";
  return (
    <>
      <div
        className={`flex gap-3 items-center rounded-lg p-2 py-3 cursor-pointer transition-colors duration-150 ${activeClasses}`}
      >
        <div className="relative flex-shrink-0">
          {" "}
          {/* For online indicator */}
          <img
            src={
              avatarUrl ||
              "https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png"
            }
            alt={`${name}'s avatar`}
            className="w-12 h-12 rounded-full object-cover"
          />
          {/* Example Online Indicator - you'd need logic for this */}
          <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-green-500 border-2 border-gray-800"></span>
        </div>

        <div className="flex flex-col flex-1 min-w-0">
          {" "}
          {/* min-w-0 for text truncation */}
          <div className="flex justify-between items-center">
            <p className="font-semibold text-gray-100 truncate">{name}</p>
            {emoji && <span className="text-xl ml-2">{emoji}</span>}
          </div>
          {lastMessage && (
            <p className="text-sm text-gray-400 truncate">{lastMessage}</p>
          )}
        </div>
      </div>
      {/* Removed the divider from here, better placed in Conversations if needed between all items */}
    </>
  );
};
export default Conversation;
