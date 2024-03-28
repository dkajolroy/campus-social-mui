import { RootStore } from "@/store/store";
import React, { ReactNode, createContext, useContext, useState } from "react";
import { useSelector } from "react-redux";
import { Socket, io } from "socket.io-client";

interface OnlineUser {
  socket_id: string;
  user_id: string;
}
const socket = io(import.meta.env.VITE_API_URL || "/", {
  withCredentials: true,
});
const SocketContext = createContext({
  socket,
  onlineUser: [] as OnlineUser[],
});

export default function SocketProvider({ children }: { children: ReactNode }) {
  const { user } = useSelector((sx: RootStore) => sx.authState);
  const [connection, setConnection] = useState<{
    socket: Socket;
    onlineUser: OnlineUser[];
  }>({
    socket,
    onlineUser: [],
  });
  React.useEffect(() => {
    if (user) {
      socket.emit("add_online_user", user._id);
      socket.on("online_users", (users: OnlineUser[]) => {
        setConnection((x) => ({ ...x, socket, onlineUser: users }));
      });
    }
  }, [user]);

  return (
    <SocketContext.Provider value={connection}>
      {children}
    </SocketContext.Provider>
  );
}

export function useSocket() {
  return useContext(SocketContext);
}
