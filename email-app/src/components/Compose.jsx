import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Compose = ({ onSendEmail }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const emailData = location.state || {}; // Get email data from Inbox

  const [to, setTo] = useState(emailData.to || ""); // Now it gets the email address
  const [subject, setSubject] = useState(emailData.subject || "");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!to || !subject || !body) {
      alert("All fields are required!");
      return;
    }

    const newEmail = {
      id: Date.now(),
      to,
      subject,
      body,
      time: "Just now",
    };

    onSendEmail(newEmail);
    alert("Email Sent!");

    // Clear form
    setTo("");
    setSubject("");
    setBody("");

    // Redirect to Sent page
    navigate("/sent");
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">✉️ Compose Email</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-600">To:</label>
          <input
            type="email"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="block text-gray-600">Subject:</label>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="block text-gray-600">Body:</label>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded h-28"
          ></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Send
        </button>
      </form>
    </div>
  );
};

export default Compose;
