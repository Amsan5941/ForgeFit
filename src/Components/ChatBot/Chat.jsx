import { useState } from "react";
import './Chat.css';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
  if (!userInput.trim()) return;

  const userMsg = { role: "user", content: userInput };
  const updatedMessages = [...messages, userMsg];

  setMessages(updatedMessages);
  setUserInput("");
  setLoading(true);

  try {
    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer`, // Use Bearer and a correct key!
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: updatedMessages,
      }),
    });

    const data = await res.json();
    console.log("API Response:", data); // <-- Move console.log INSIDE try!

    if (data.choices && data.choices.length > 0) {
      const aiResponse = data.choices[0].message;
      setMessages([...updatedMessages, aiResponse]);
    } else {
      console.error("No choices returned from API:", data);
    }

  } catch (error) {
    console.error("Chat error:", error);
  } finally {
    setLoading(false);
  }

  console.log("User Input:", userInput);
  console.log("Updated Messages:", updatedMessages);
};

  return (
    <div className="chat-box">
  <div className="chat-messages">
    {messages.map((msg, i) => (
      <div key={i} className={`chat-message ${msg.role}`}>
        <p>{msg.content}</p>
      </div>
    ))}
  </div>
  <div className="chat-input-area">
    <input
      className="chat-input"
      value={userInput}
      onChange={(e) => setUserInput(e.target.value)}
      onKeyDown={(e) => e.key === "Enter" && sendMessage()}
    />
    <button
      className="chat-send-button"
      onClick={sendMessage}
      disabled={loading}
    >
      Send
    </button>
  </div>
</div>


  );
};

export default Chat;
