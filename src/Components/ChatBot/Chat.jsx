import { useEffect, useRef, useState } from "react";
import ReactMarkdown from 'react-markdown';
import "./Chat.css";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);
  const logRef = useRef(null);

  useEffect(() => {
    if (logRef.current) {
      logRef.current.scrollTop = logRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = async () => {
    if (loading) return;
    const text = userInput.trim();
    if (!text) return;

    const userMsg = { role: "user", content: text };
    const updated = [...messages, userMsg];

    setMessages(updated);
    setUserInput("");
    setLoading(true);

    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      const res = await fetch(`${apiUrl}/api/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updated }),
      });

      const data = await res.json();
      const reply = data?.reply || "(No response)";
      setMessages(prev => [...prev, { role: "assistant", content: reply }]);
    } catch (err) {
      console.error("Chat error:", err);
      setMessages(prev => [...prev, { role: "assistant", content: "⚠️ Error connecting to AI." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="chat-page">
      <div className="chat-container">
        <div className="chat-box">
          <div className="chat-messages" ref={logRef}>
            {messages.map((msg, i) => {
              const cls = msg.role === "user" ? "user" : "bot";
              return (
                <div key={i} className={`chat-message ${cls}`}>
                  {msg.role === "assistant"
                    ? <ReactMarkdown>{msg.content}</ReactMarkdown>
                    : <p>{msg.content}</p>
                  }
                </div>
              );
            })}
          </div>

          <div className="chat-input-area">
            <input
              className="chat-input"
              value={userInput}
              placeholder={loading ? "Thinking..." : "Type your message..."}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              disabled={loading}
            />
            <button
              className="chat-send-button"
              onClick={sendMessage}
              disabled={loading}
            >
              {loading ? "..." : "Send"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
