import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Inbox = () => {
  const [emails] = useState([
    { id: 1, sender: "John Doe", email: "john.doe@example.com", subject: "Meeting Reminder", body: "Hey, just reminding you about our meeting at 3 PM today.", time: "10:30 AM" },
    { id: 2, sender: "Jane Smith", email: "jane.smith@example.com", subject: "Project Update", body: "The project is moving smoothly. I'll share the details soon.", time: "9:15 AM" },
    { id: 3, sender: "Amazon", email: "no-reply@amazon.com", subject: "Your Order Has Shipped!", body: "Your order #12345 has been shipped and will arrive soon.", time: "Yesterday" },
    { id: 4, sender: "Netflix", email: "no-reply@netflix.com", subject: "New Shows This Week", body: "Check out the latest movies and series added to Netflix!", time: "Yesterday" },
  ]);

  const navigate = useNavigate();

  const handleReply = (email) => {
    navigate(`/compose`, { state: { to: email.email, subject: `Re: ${email.subject}` } });
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4 text-gray-700">📥 Inbox</h2>
      {emails.length === 0 ? (
        <p className="text-gray-500">No new messages.</p>
      ) : (
        <div className="space-y-4">
          {emails.map((email) => (
            <div key={email.id} className="bg-white p-4 shadow-md rounded-lg border-l-4 border-blue-500">
              <div className="flex justify-between">
                <p className="font-semibold text-gray-800">{email.sender} ({email.email})</p>
                <p className="text-gray-500 text-sm">{email.time}</p>
              </div>
              <p className="text-lg font-medium text-gray-700">{email.subject}</p>
              <p className="text-gray-600">{email.body}</p>
              {/* Reply Button */}
              <button
                onClick={() => handleReply(email)}
                className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Reply
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Inbox;
