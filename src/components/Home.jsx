import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [roomId, setRoomId] = useState("");
  let navigate = useNavigate();
  const handleJoin = () => {
    if (roomId === "") {
      alert("Please enter a room ID");
      return;
    }
    // Redirect to the room page
    navigate(`/room/${roomId}`);
  };
  // Function to create a new room with a random ID
  const handleCreateRoom = () => {
    const newRoomId = Math.random().toString(36).substring(2, 10);
    navigate(`/room/${newRoomId}`);
  };
  return (
    <div id="home">
      <h1>Welcome to Your Ultimate Video Meeting Hub</h1>
      <p>Ready to connect? Instantly launch a brand new meeting:</p>

      <button
        onClick={() => {
          handleCreateRoom();
        }}
      >
        ✨ Start a New Meeting
      </button>

      <p>Already have an invite? Join your team or friends here:</p>
      <input
        type="text"
        placeholder="Enter Room ID"
        value={roomId}
        onChange={(e) => setRoomId(e.target.value)}
      />
      <button onClick={handleJoin}>🚀 Join Meeting</button>
    </div>
  );
};

export default Home;
