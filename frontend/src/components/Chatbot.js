import React, { useState } from "react";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    setMessages([...messages, { sender: "user", text: input }]);

    try {
      const response = await fetch("http://localhost:5000/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: input }),
      });

      const data = await response.json();
      console.log("Chatbot API Response:", data); // Debug response
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: data.response || "Sorry, I couldn't understand that." },
      ]);
    } catch (error) {
      console.error("Chatbot Error:", error); // Debug errors
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "There was an error. Please try again later." },
      ]);
    }

    setInput("");
  };

  return (
    <div>
      <h2>Chatbot</h2>
      <div className="chatbox">
        {messages.map((msg, index) => (
          <div key={index} className={msg.sender}>
            {msg.text}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your message..."
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default Chatbot;
