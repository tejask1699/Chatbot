import { useState } from "react";

const SuccessModal = () => {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg text-center">
        <h2 className="text-2xl font-bold text-green-600">🎉 Integration Successful!</h2>
        <p className="text-gray-600 mt-2">Your chatbot is now live on your website.</p>

        {/* Buttons */}
        <div className="mt-4 space-x-3">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md">Explore Admin Panel</button>
          <button className="bg-purple-600 text-white px-4 py-2 rounded-md">Start Talking to Your Chatbot</button>
        </div>

        {/* Social Sharing */}
        <div className="mt-4">
          <p className="text-gray-500">Share your chatbot:</p>
          <button className="bg-blue-500 text-white px-3 py-1 rounded-md mr-2">Twitter</button>
          <button className="bg-blue-700 text-white px-3 py-1 rounded-md">LinkedIn</button>
        </div>

        {/* Close Modal */}
        <button className="mt-4 text-gray-500 underline" onClick={() => setIsOpen(false)}>Close</button>
      </div>
    </div>
  );
};

export default SuccessModal;
