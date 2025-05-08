// src/components/messages/Messages.jsx
import React, { useEffect, useRef } from "react";
import Message from "./Message";

const Messages = () => {
  const messagesEndRef = useRef(null);

  // Dummy messages for demonstration
  const sampleMessages = [
    {
      id: 1,
      text: "Hey, how are you?",
      time: "10:00 AM",
      sender: false,
      avatar: "https://avatar.iran.liara.run/public/girl",
    },
    {
      id: 2,
      text: "I'm good, thanks! How about you?",
      time: "10:01 AM",
      sender: true,
      avatar: "https://avatar.iran.liara.run/public/boy",
    },
    {
      id: 3,
      text: "Doing great! Working on this chat app.",
      time: "10:02 AM",
      sender: false,
      avatar: "https://avatar.iran.liara.run/public/girl",
    },
    {
      id: 4,
      text: "Oh cool! Sounds interesting. I have a really long message here to test how the wrapping works and if it breaks the layout or if it handles it gracefully. It should ideally wrap to multiple lines and not overflow the container horizontally. Let's see how it goes.",
      time: "10:03 AM",
      sender: true,
      avatar: "https://avatar.iran.liara.run/public/boy",
    },
    {
      id: 5,
      text: "It should scroll when there are many messages.",
      time: "10:04 AM",
      sender: false,
      avatar: "https://avatar.iran.liara.run/public/girl",
    },
    // Add more messages to test scrolling
    ...Array.from({ length: 15 }, (_, i) => ({
      id: 6 + i,
      text: `This is message number ${i + 6}.`,
      time: `10:${(i + 5).toString().padStart(2, "0")} AM`,
      sender: i % 2 === 0,
      avatar:
        i % 2 === 0
          ? "https://avatar.iran.liara.run/public/girl"
          : "https://avatar.iran.liara.run/public/boy",
    })),
    {
      id: 21,
      text: "This is the last message.",
      time: "10:20 AM",
      sender: true,
      avatar: "https://avatar.iran.liara.run/public/boy",
    },
  ];

  useEffect(() => {
    // Scroll to the bottom whenever messages change
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [sampleMessages]); // In a real app, this would be your messages state

  return (
    <div className="px-4 flex-1 overflow-y-auto bg-gray-800/50">
      {" "}
      {/* Key classes here! Added a slightly transparent bg */}
      {sampleMessages.map((msg) => (
        <Message
          key={msg.id}
          message={msg.text}
          timestamp={msg.time}
          isSender={msg.sender}
          avatarUrl={msg.avatar}
        />
      ))}
      <div ref={messagesEndRef} /> {/* Element to scroll to */}
    </div>
  );
};

export default Messages;
