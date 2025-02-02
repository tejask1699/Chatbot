import React, { useState } from 'react'
import "../CSS/chatbotIntegration.css"
import Success from "./Success"
import Failure from "./Failure"
import Navbar from '../Navigation/Navbar';


function ChatbotIntegration() {
    const [integrationStatus, setIntegrationStatus] = useState(null);
    const checkIntegration = () => {
        const isIntegrated = Math.random() > 0.5; // Random success/failure for demo
        setIntegrationStatus(isIntegrated ? "success" : "failure");
      };
  return (
    <>
    <Navbar/>
    <div className='container'>
      <h2>Chatbot Integration & Testing</h2>

      <button
        onClick={() => alert("Opening test chatbot on your website...")}
      >
        Test Chatbot
      </button>
      <p>Chatbot not working as intended? <a href="#">Share feedback</a></p>

      <div>
        <h3>Integrate on Your Website</h3>
        <p>Copy & paste the following script into your website's <code>&lt;head&gt;</code> section:</p>
        <pre>
          &lt;script src="https://your-chatbot.com/integration.js"&gt;&lt;/script&gt;
        </pre>
        <button onClick={() => alert("Instructions sent to developer")}>
          Email Instructions to Developer
        </button>
      </div>

      <button
        onClick={checkIntegration}
      >
        Test Integration
      </button>

      {integrationStatus === "success" && <Success/>}
      {integrationStatus === "failure" && <Failure/>}
    </div>
    </>
  )
}

export default ChatbotIntegration