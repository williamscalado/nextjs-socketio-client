import { Bell } from "lucide-react";
import Image from "next/image";
import { io } from "socket.io-client";

export default function Header() {
  const socketIo = io("http://localhost:3999");
  console.log("dados do socket", socketIo.active);
  socketIo.on("connect", () => {
    console.log("id", socketIo.id);
  });

  return (
    <div className="h-[70px] w-full bg-slate-800 flex items-center p-5 mb-2">
      <div className="flex justify-between w-full items-center">
        <Image
          src="/logo-revalida.png"
          alt="Mundo Revalida"
          width={250}
          height={50}
        />
        <div className="relative cursor-pointer">
          <Bell className="text-white" />
          <div className="absolute pr-1 pl-1 items-center justify-center h-max top-3  bg-red-500 text-white text-xs rounded-full">
            1
          </div>
        </div>
      </div>
    </div>
  );
}
