import React from "react";

const Sent = ({ sentEmails }) => {
  // Dummy sent emails
  const dummySentEmails = [
    {
      id: 1,
      to: "mark@gmail.com",
      subject: "Follow-up on Project",
      body: "Hey Mark, just checking in on the project status.",
      time: "Yesterday",
    },
    {
      id: 2,
      to: "lisa@yahoo.com",
      subject: "Invoice for March",
      body: "Please find the attached invoice for this month.",
      time: "Last Week",
    },
  ];

  // Show newly sent emails first
  const allSentEmails = [...sentEmails, ...dummySentEmails];

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4 text-gray-700">📤 Sent Emails</h2>
      {allSentEmails.length === 0 ? (
        <p className="text-gray-500">No sent messages.</p>
      ) : (
        <div className="space-y-4">
          {allSentEmails.map((email, index) => (
            <div key={index} className="bg-white p-4 shadow-md rounded-lg border-l-4 border-green-500">
              <div className="flex justify-between">
                <p className="font-semibold text-gray-800">To: {email.to}</p>
                <p className="text-gray-500 text-sm">{email.time || "Just now"}</p>
              </div>
              <p className="text-lg font-medium text-gray-700">{email.subject}</p>
              <p className="text-gray-600">{email.body}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Sent;
