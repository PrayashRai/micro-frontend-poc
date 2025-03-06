import React, { useState } from "react";
import ChatList from "../components/ChatList";
import ChatWindow from "../components/ChatWindow";
import MessageInput from "../components/MessageInput";

const ChatPage = () => {
  const [conversations, setConversations] = useState([
    { id: 1, name: "Alice", messages: [{ sender: "Alice", text: "Hey there!" }] },
    { id: 2, name: "Bob", messages: [{ sender: "Bob", text: "Hello!" }] },
    { id: 3, name: "Charlie", messages: [] },
  ]);

  const [activeChatId, setActiveChatId] = useState(1);

  const selectConversation = (id) => {
    setActiveChatId(id);
  };

  const addConversation = (name) => {
    const newChat = {
      id: conversations.length + 1,
      name,
      messages: [],
    };
    setConversations([...conversations, newChat]);
  };

  const sendMessage = (text) => {
    setConversations((prevChats) =>
      prevChats.map((chat) =>
        chat.id === activeChatId
          ? { ...chat, messages: [...chat.messages, { sender: "You", text }] }
          : chat
      )
    );
  };

  const activeChat = conversations.find((chat) => chat.id === activeChatId);

  return (
    <div className="flex h-screen">
      <ChatList
        conversations={conversations}
        selectConversation={selectConversation}
        addConversation={addConversation}
      />
      <div className="flex flex-col flex-1">
        <div className="p-4 bg-gray-200 text-lg font-semibold border-b">
          Chat with {activeChat ? activeChat.name : "Select a Chat"}
        </div>
        {activeChat ? (
          <>
            <ChatWindow messages={activeChat.messages} />
            <MessageInput sendMessage={sendMessage} />
          </>
        ) : (
          <div className="p-4 text-gray-500 text-center">
            Select or create a chat to start messaging.
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatPage;
