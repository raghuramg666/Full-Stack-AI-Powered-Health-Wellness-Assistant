import React, { useState } from "react";
import "./App.css";

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [responseBoxContent, setResponseBoxContent] = useState([]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const chatContext = messages.map((msg) => ({
      role: msg.sender === "user" ? "user" : "assistant",
      content: msg.text,
    }));

    setMessages([...messages, { sender: "user", text: input }]);

    try {
      const response = await fetch("http://localhost:5000/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: input, chat_context: chatContext }),
      });

      const data = await response.json();
      const botResponse = data.response;

      setMessages((prev) => [...prev, { sender: "bot", text: botResponse }]);

      // Show detailed responses in the response box
      setResponseBoxContent((prev) => [...prev, botResponse]);
    } catch (error) {
      console.error("Chat Error:", error);
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Sorry, something went wrong. Please try again." },
      ]);
    }

    setInput("");
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Health and Wellness Assistant</h1>
      </header>
      <main className="app-main">
        {/* Chat Window */}
        <div className="chat-box">
          <h2>Chat</h2>
          <div className="chat-window">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`chat-message ${
                  msg.sender === "user" ? "user-message" : "bot-message"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chat-input-container">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="chat-input"
            />
            <button onClick={sendMessage} className="chat-send-button">
              Send
            </button>
          </div>
        </div>

        {/* Response Box */}
        <div className="response-box">
          <h2>Responses</h2>
          <div className="response-window">
            {responseBoxContent.map((content, index) => (
              <p key={index}>{content}</p>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
