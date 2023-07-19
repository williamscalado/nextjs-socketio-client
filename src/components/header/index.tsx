"use client";
import { Bell } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Socket, io } from "socket.io-client";
interface IMessage {
  id: string;
  name: string;
  text: string;
  isOwner?: boolean;
}
interface IProps {
  isAdmin?: boolean;
}
const socket: Socket = io("http://localhost:3999");
export default function Header({ isAdmin = true }: IProps) {
  const [messages, setMessages] = useState<any[]>([]);
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    socket.on("notification-header", (arg) => {
      setMessages(arg);
    });
    return () => {
      socket.off("notification-header");
    };
  });
  return (
    <div className="h-[70px] w-full bg-slate-800 flex items-center p-5 mb-2">
      <div className="flex justify-between w-full items-center">
        <Link href={"/"}>
          <Image
            src="/logo-revalida.png"
            alt="Mundo Revalida"
            width={250}
            height={50}
          />
        </Link>
        {!isAdmin && (
          <div className="relative cursor-pointer">
            <div onClick={() => setVisible(!visible)}>
              <Bell className="text-white" role="bell" />
              <div className="absolute pr-1 pl-1 items-center justify-center h-max top-3  bg-red-500 text-white text-xs rounded-full">
                {messages.length || 0}
              </div>
            </div>

            <div
              className={`absolute  w-[200px] p-1 items-center justify-center right-0   top-10  bg-gray-100 text-xs ${
                visible ? "visible" : "hidden"
              }`}
            >
              {messages.map((item, key) => {
                return (
                  <div
                    key={key}
                    className="h-[44px] w-full flex items-center text-black p-2  border-b hover:bg-slate-200"
                  >
                    {item.title}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
