import React, { useState } from "react";

const MessageInput = ({ sendMessage }) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() === "") return;
    sendMessage(message);
    setMessage("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center p-4 bg-gray-100 border-t"
    >
      <input
        type="text"
        className="flex-1 p-2 border rounded-lg outline-none"
        placeholder="Type a message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        type="submit"
        className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg"
      >
        Send
      </button>
    </form>
  );
};

export default MessageInput;
