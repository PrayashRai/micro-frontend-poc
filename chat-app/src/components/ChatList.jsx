import React, { useState } from "react";

const ChatList = ({ conversations, selectConversation, addConversation }) => {
  const [newChatName, setNewChatName] = useState("");

  const handleAddChat = () => {
    if (newChatName.trim() === "") return;
    addConversation(newChatName);
    setNewChatName("");
  };

  return (
    <div className="w-1/3 border-r bg-gray-100 p-4 h-screen overflow-y-auto">
      <h2 className="text-xl font-semibold mb-4">Chats</h2>
      {conversations.map((chat) => (
        <div
          key={chat.id}
          onClick={() => selectConversation(chat.id)}
          className="p-3 border rounded-lg cursor-pointer hover:bg-gray-200 mb-2"
        >
          {chat.name}
        </div>
      ))}

      {/* Add new chat */}
      <div className="mt-4">
        <input
          type="text"
          className="p-2 border rounded-lg w-full"
          placeholder="New Chat Name"
          value={newChatName}
          onChange={(e) => setNewChatName(e.target.value)}
        />
        <button
          onClick={handleAddChat}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg w-full"
        >
          Add Chat
        </button>
      </div>
    </div>
  );
};

export default ChatList;
