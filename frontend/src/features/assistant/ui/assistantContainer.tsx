import clsx from "clsx";
import { FC, PropsWithChildren } from "react";

export const AssistantContainer: FC<PropsWithChildren> = ({ children }) => (
  <div className={clsx("w-full h-full flex flex-col")}>{children}</div>
);
