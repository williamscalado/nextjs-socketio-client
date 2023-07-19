import { io, ManagerOptions } from "socket.io-client";

export const connectWS = () => {
  return io("http://localhost:3999");
};

export const socket = (query?: ManagerOptions["query"]) =>
  io("http://localhost:3999", { query });
