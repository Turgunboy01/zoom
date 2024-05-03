import React, { useCallback, useState } from "react";

const Lobby = () => {
  const [email, setEmail] = useState("");
  const [room, setRoom] = useState("");

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      console.log({
        email,
        room,
      });
    },
    [email, room]
  );

  return (
    <div>
      <h1>Lobby</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email: Id</label>
        <input
          type="text"
          id="email"
          value={email}
           onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label htmlFor="room">Room number</label>
        <input
          type="text"
          id="room"
          value={room}
          onChange={(e) => setRoom(e.target.value)}
        />
        <br />
        <button>Join</button>
      </form>
    </div>
  );
};

export default Lobby;
