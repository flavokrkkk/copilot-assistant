"use client";

import React, { FC, PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { store } from "../model/store";
import { ChatCtxProvider } from "@/entities/chat/model/context/chatCtxProvider";
import SocketProvider from "./socketProvider";

export const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Provider store={store}>
      <ChatCtxProvider>
        <SocketProvider>{children}</SocketProvider>
      </ChatCtxProvider>
    </Provider>
  );
};
