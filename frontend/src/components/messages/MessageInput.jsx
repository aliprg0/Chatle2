// src/components/messages/MessageInput.jsx
import React from "react";
import { BsSend } from "react-icons/bs";

const MessageInput = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle message sending logic here
    console.log("Message submitted:", e.target.elements.message.value);
    e.target.elements.message.value = ""; // Clear input after send
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 border-t border-gray-700 bg-gray-900"
    >
      {" "}
      {/* Added background and border */}
      <div className="flex items-center gap-2">
        <input
          type="text"
          name="message" // Added name for easier access in handleSubmit
          className="flex-1 border text-sm rounded-lg p-2.5 bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-sky-500 focus:border-sky-500 outline-none"
          placeholder="Send a message..."
        />
        <button
          type="submit"
          className="p-2.5 bg-sky-500 text-white rounded-lg hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-400"
          aria-label="Send message"
        >
          <BsSend size={20} />
        </button>
      </div>
    </form>
  );
};
export default MessageInput;
