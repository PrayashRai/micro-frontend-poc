import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Inbox from '../components/Inbox'
import Sent from "../components/Sent";
import Compose from "../components/Compose";

const App = () => {
  const [sentEmails, setSentEmails] = useState([]);

  const handleSendEmail = (email) => {
    setSentEmails([email, ...sentEmails]); // Add new email to Sent list
  };

  return (
    <Router>
      <div className="flex h-screen bg-gray-100">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-md p-4">
          <h1 className="text-xl font-semibold mb-4 text-gray-700">📧 Email App</h1>
          <nav className="space-y-2">
            <Link to="/" className="block p-2 rounded-lg hover:bg-gray-200">
              📥 Inbox
            </Link>
            <Link to="/sent" className="block p-2 rounded-lg hover:bg-gray-200">
              📤 Sent
            </Link>
            <Link to="/compose" className="block p-2 bg-blue-500 text-white rounded-lg text-center hover:bg-blue-600">
              ✉️ Compose
            </Link>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <Routes>
            <Route path="/" element={<Inbox />} />
            <Route path="/sent" element={<Sent sentEmails={sentEmails} />} />
            <Route path="/compose" element={<Compose onSendEmail={handleSendEmail} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
