// src/components/messages/MessageInput.jsx
import React, { useState } from "react";
import { BsSend } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const { loading, sendMessage } = useSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) return;
    await sendMessage(message);
    setMessage("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 border-t border-gray-700 bg-gray-900"
    >
      <div className="flex items-center gap-2">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="flex-1 border text-sm rounded-lg p-2.5 bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-sky-500 focus:border-sky-500 outline-none"
          placeholder="Send a message..."
        />
        <button
          type="submit"
          disabled={loading}
          className="p-2.5 bg-sky-500 text-white rounded-lg hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-400"
          aria-label="Send message"
        >
          {loading ? (
            <span className="loading loading-spinner"></span>
          ) : (
            <BsSend size={20} />
          )}
        </button>
      </div>
    </form>
  );
};
export default MessageInput;
