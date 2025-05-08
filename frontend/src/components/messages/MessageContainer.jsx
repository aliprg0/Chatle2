// src/components/messages/MessageContainer.jsx
import React from "react";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { NoChatSelected } from "./ContainerWithoutChat";

const MessageContainer = () => {
  const noChatSelected = true;
  const currentChatUser = {
    name: "John Doe",
    avatar: "https://avatar.iran.liara.run/public/boy?username=JohnDoe",
  };

  return (
    <div className="flex flex-col h-full bg-gray-800 text-white md:min-w-[450px] flex-1">
      {noChatSelected ? (
        <NoChatSelected />
      ) : (
        <div>
          <div className="bg-gray-700 px-4 py-3 mb-0 shadow-md flex items-center gap-3">
            {" "}
            <img
              src={currentChatUser.avatar}
              alt="User avatar"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <span className="label-text text-gray-400 text-xs">
                Chatting with:
              </span>{" "}
              <span className="text-gray-100 font-bold text-lg">
                {currentChatUser.name}
              </span>
            </div>
          </div>

          <Messages />

          <MessageInput />
        </div>
      )}
    </div>
  );
};
export default MessageContainer;
