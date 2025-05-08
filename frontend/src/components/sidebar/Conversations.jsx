// src/components/sidebar/Conversations.jsx
import React from "react";
import Conversation from "./Conversation";

const Conversations = () => {
  // Dummy data
  const convos = [
    {
      id: 1,
      name: "Alice Wonderland",
      avatar: "https://avatar.iran.liara.run/public/girl?username=Alice",
      lastMessage: "See you tomorrow!",
      emoji: "👋",
      active: true,
    },
    {
      id: 2,
      name: "Bob The Builder",
      avatar: "https://avatar.iran.liara.run/public/boy?username=Bob",
      lastMessage: "Can we fix it?",
      emoji: "🛠️",
    },
    {
      id: 3,
      name: "Charlie Chaplin",
      avatar: "https://avatar.iran.liara.run/public/job/actor/male",
      lastMessage: "...",
      emoji: "🎩",
    },
    {
      id: 4,
      name: "Diana Prince",
      avatar: "https://avatar.iran.liara.run/public/hero/female",
      lastMessage: "Justice!",
      emoji: "🌟",
    },
    // Add more to test scroll
    ...Array.from({ length: 10 }, (_, i) => ({
      id: 5 + i,
      name: `User ${i + 5} With A Very Long Name That Might Overflow`,
      avatar: `https://avatar.iran.liara.run/public/${
        i % 2 === 0 ? "girl" : "boy"
      }?username=User${i + 5}`,
      lastMessage: "This is a test message that could be long.",
    })),
  ];

  return (
    // Key classes: flex-1 to take available space, overflow-y-auto for scrolling
    <div className="py-2 flex flex-col gap-0.5 flex-1 overflow-y-auto pr-1">
      {" "}
      {/* Added pr-1 for scrollbar space */}
      {convos.map((convo, index) => (
        <React.Fragment key={convo.id}>
          <Conversation
            name={convo.name}
            avatarUrl={convo.avatar}
            lastMessage={convo.lastMessage}
            emoji={convo.emoji}
            isActive={convo.active || false}
          />
          {index < convos.length - 1 && (
            <div className="border-b border-gray-700 my-1 mx-2" /> // Simple divider
          )}
        </React.Fragment>
      ))}
    </div>
  );
};
export default Conversations;
