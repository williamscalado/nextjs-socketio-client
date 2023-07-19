"use client";

import Header from "@/components/header";
import NewModule from "@/components/newModule";
import { socket } from "@/services/websocket";
import { useState } from "react";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export default function AdminPage() {
  const [socketInit] = useState(socket);
  const [moduleName, setModuleName] = useState<string>("");
  const handleSubmit = () => {
    try {
      if (!moduleName) {
        toast.error("Digite o nome", {
          theme: "dark",
        });
        return;
      }
      socketInit.emit("notification-header", moduleName);
      setModuleName("");
      toast.success("Cadastro realizado com sucesso");
    } catch (error) {
      toast.error("Tivemos um problema no servidor");
    }
  };
  return (
    <div>
      <Header />
      <NewModule setValue={setModuleName} handleSubmit={handleSubmit} />
    </div>
  );
}
