import React, { useState } from "react";
import { api } from "./api";
import { getSessionId, newSession } from "./session";

function ChatScreen() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [sessionId, setSessionId] = useState(getSessionId());

  const sendMessage = async () => {
    if (!input) return;

    setLoading(true);

    try {
      const res = await api.post("/chat", {
        sessionId,
        message: input
      });

      setMessages(prev => [
        ...prev,
        { role: "user", content: input },
        { role: "assistant", content: res.data.reply }
      ]);
    } catch {
      alert("Error occurred");
    }

    setInput("");
    setLoading(false);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>AI Support Assistant</h2>
      <button onClick={() => {
        setSessionId(newSession());
        setMessages([]);
      }}>
        New Chat
      </button>

      <div style={{ marginTop: 20 }}>
        {messages.map((msg, i) => (
          <div key={i}>
            <b>{msg.role}:</b> {msg.content}
          </div>
        ))}
      </div>

      {loading && <p>Loading...</p>}

      <input
        value={input}
        onChange={e => setInput(e.target.value)}
        style={{ width: "70%" }}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default ChatScreen;
