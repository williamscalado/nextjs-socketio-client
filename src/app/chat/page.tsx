"use client";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import io, { Socket } from "socket.io-client";

const socket: Socket = io("http://localhost:3999"); // Create a Socket.IO instance and connect to the server

export default function Chat() {
  const [messages, setMessages] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  useEffect(() => {
    // Event listener for incoming messages
    socket.on("message", (message: string) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    // Clean up the listener on unmount
    return () => {
      socket.off("message");
    };
  }, []);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      // Emit a 'message' event to the server
      socket.emit("message", inputValue);
      setInputValue("");
    }
  };

  return (
    <div>
      <div>
        {messages.map((message, index) => (
          <p key={index}>{message}</p>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Digite sua mensagem..."
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
