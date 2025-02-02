import { useState } from "react";

const FailureModal = () => {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg text-center">
        <h2 className="text-2xl font-bold text-red-600">❌ Integration Not Detected</h2>
        <p className="text-gray-600 mt-2">We couldn't find the chatbot on your website.</p>

        {/* Retry Instructions */}
        <p className="text-gray-500 mt-3">Make sure you've added the script correctly, then try again.</p>
        <button className="bg-yellow-600 text-white px-4 py-2 rounded-md mt-2" onClick={() => window.location.reload()}>
          Retry
        </button>

        {/* Contact Support */}
        <p className="mt-4 text-gray-500">Need help? <a href="#" className="text-blue-500 underline">Contact Support</a></p>

        {/* Close Modal */}
        <button className="mt-4 text-gray-500 underline" onClick={() => setIsOpen(false)}>Close</button>
      </div>
    </div>
  );
};

export default FailureModal;
