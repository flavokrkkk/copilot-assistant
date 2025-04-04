"use client";

import { ArrowUp } from "lucide-react";
import React, { ChangeEvent, useCallback, useState } from "react";
import { useSendMessage } from "../hooks/useSendMessage";
import { Input } from "@/shared/ui/input/input";

export const AssistantInput = () => {
  const { handleSendNewMessage } = useSendMessage();

  const [message, setMessages] = useState("");

  const handleChangeMessage = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setMessages(event.target.value);
    },
    []
  );

  const handleSendMessage = useCallback(() => {
    handleSendNewMessage({ content: message });
    setMessages("");
  }, [message, handleSendNewMessage]);

  return (
    <div className="flex items-center space-x-2 p-3">
      <Input
        autoFocus
        value={message}
        placeholder="Напишите сообщение..."
        className="outline-0 rounded-3xl px-5 border-none text-zinc-400 bg-neutral-800 placeholder:text-zinc-400 placeholder:text-[16px]"
        onChange={handleChangeMessage}
      />
      <button
        disabled={!message}
        className="p-[6px] rounded-full disabled:bg-neutral-400 bg-blue-500 hover:bg-blue-600  cursor-pointer"
        onClick={handleSendMessage}
      >
        <ArrowUp className="text-white" />
      </button>
    </div>
  );
};
