import React from "react";

const ChatWindow = ({ messages }) => {
  return (
    <div className="flex-1 bg-white p-4 overflow-y-auto h-[85vh]">
      {messages.length === 0 ? (
        <p className="text-gray-400">No messages yet.</p>
      ) : (
        messages.map((msg, index) => (
          <div
            key={index}
            className={`p-2 my-2 rounded-lg max-w-xs ${
              msg.sender === "You"
                ? "bg-blue-500 text-white self-end ml-auto"
                : "bg-gray-200 text-black self-start"
            }`}
          >
            <p className="text-sm">{msg.text}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default ChatWindow;
