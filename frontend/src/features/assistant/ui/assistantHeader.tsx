import React from "react";
import { Search } from "lucide-react";
import clsx from "clsx";
import { AssistantAvatar } from "./assistantAvatar";

export const AssistantHeader = () => {
  return (
    <section className="flex justify-between items-center border-b border-neutral-500 p-3">
      <div className="flex space-x-2 items-center">
        <AssistantAvatar />
        <section>
          <div className="flex items-center space-x-2">
            <h1 className="font-medium text-white">Ассистент</h1>
            <span
              className={clsx("w-2 h-2 rounded-full bg-green-400")}
              title="Онлайн"
            />
          </div>
          <p className="text-sm text-neutral-500">Ассистент-поисковик</p>
        </section>
      </div>
      <Search className="text-blue-500 cursor-pointer" />
    </section>
  );
};
