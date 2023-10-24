import React, { useState } from "react";
import OpenAI from "openai";
import "./ChatBot.css";

const Chatbot = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [messageHistory, setMessageHistory] = useState([]);

  const openai = new OpenAI({
    apiKey: "YOUR_API_KEY",
    dangerouslyAllowBrowser: true
  });

  const sendMessage = async () => {
    // Add the user's message to the message history
    const userMessage = { role: "user", content: input };
    setMessageHistory((prevHistory) => [...prevHistory, userMessage]);
  
    const chatCompletion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [...messageHistory, userMessage] // Include the entire message history
    });
  
    // Add the chatbot's response to the message history
    const botResponse = chatCompletion.choices[0].message.content;
    setMessageHistory((prevHistory) => [
      ...prevHistory,
      { role: "assistant", content: botResponse },
    ]);
  
    setOutput(botResponse);
    setInput(""); // Clear the input field after sending the message
  };
  
  const sendPrompt = async (event) => {
    if (event.key === "Enter") {
      // Call your sendMessage function to send the message to the chatbot
      sendMessage();
  
    }
  }
  

  return (
    <div className="chat-container">
      <h1>AI ChatBot🤖</h1>
      <div className="message-history">
        {messageHistory.map((message, index) => (
          <div key={index} className={message.role}>
            {message.content}
          </div>
        ))}
      </div>
      <div className="user-message">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => sendPrompt(e)}
          className="chat-input"
        />
        <button type="button" onClick={sendMessage} className="send-button">
          Send
        </button>
      </div>
    </div>
  );
};
export default Chatbot;
