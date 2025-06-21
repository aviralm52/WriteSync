"use client";

import {
  ClientSideSuspense,
  RoomProvider as RoomProviderWrapper,
} from "@liveblocks/react/suspense";

import LiveCursorProvider from "./LiveCursorProvider";
import TruckLoader from "./TruckLoaders";
import FuzzyText from "./FuzzyText";

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
        fallback={<div className=" h-[80vh] w-[70vw] flex justify-center items-center">
          <div className=" flex flex-col justify-center items-center gap-y-2">
            <TruckLoader />
            <FuzzyText >Your Workspace is Loading </FuzzyText>
          </div>
        </div>}
      >
        <LiveCursorProvider>{children}</LiveCursorProvider>
      </ClientSideSuspense>
    </RoomProviderWrapper>
  );
};
export default RoomProvider;
