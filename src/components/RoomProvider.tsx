"use client";

import { LucideLoader2 } from "lucide-react";

import {
  ClientSideSuspense,
  RoomProvider as RoomProviderWrapper,
} from "@liveblocks/react/suspense";

import LiveCursorProvider from "./LiveCursorProvider";

const RoomProvider = ({
  roomId,
  children,
}: {
  roomId: string;
  children: React.ReactNode;
}) => {
  return (
    <RoomProviderWrapper id={roomId} initialPresence={{ cursor: null }}>
      <ClientSideSuspense
        fallback={<LucideLoader2 className=" animate-spin w-12 h-12 mx-auto" />}
      >
        <LiveCursorProvider>{children}</LiveCursorProvider>
      </ClientSideSuspense>
    </RoomProviderWrapper>
  );
};
export default RoomProvider;
