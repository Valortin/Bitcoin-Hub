import { useState, useEffect } from "react";
import axios from "axios";

function Chat() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    // Mock API call to fetch messages
    axios.get("/api/chat").then((response) => setMessages(response.data));
  }, []);

  const handleSendMessage = async () => {
    if (newMessage.trim()) {
      // Mock API call to send message
      await axios.post("/api/chat", { text: newMessage });
      setMessages([...messages, { text: newMessage, sender: "You" }]);
      setNewMessage("");
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md h-96 flex flex-col">
      <h2 className="text-2xl font-semibold mb-4">Community Chat</h2>
      <div className="flex-1 overflow-y-auto">
        {messages.map((msg, index) => (
          <div key={index} className="mb-2">
            <span className="font-bold">{msg.sender}: </span>{msg.text}
          </div>
        ))}
      </div>
      <div className="flex mt-4">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="flex-1 p-2 border rounded-l"
          placeholder="Type a message..."
        />
        <button
          onClick={handleSendMessage}
          className="bg-bitcoin text-dark px-4 py-2 rounded-r hover:bg-opacity-80"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default Chat;