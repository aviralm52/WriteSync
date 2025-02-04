"use client";

import { useMyPresence, useOthers } from "@liveblocks/react/suspense";

import FollowPointer from "./FollowPointer";

const LiveCursorProvider = ({ children }: { children: React.ReactNode }) => {
  const others = useOthers();
  const [, updateMyPresence] = useMyPresence();

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    // updated from clientX and ClientY to PageX and PageY for full page cursor tracking
    const cursor = { x: Math.floor(e.pageX), y: Math.floor(e.pageY) };
    updateMyPresence({ cursor });
  };

  const handlePointerLeave = () => {
    updateMyPresence({ cursor: null });
  };

  return (
    <div onPointerMove={handlePointerMove} onPointerLeave={handlePointerLeave}>
      {/* Render Cursors */}
      {others
        .filter((other) => other.presence.cursor !== null)
        .map(({ connectionId, presence, info }) => (
          <FollowPointer
            key={connectionId}
            info={info}
            x={presence.cursor!.x}
            y={presence.cursor!.y}
          />
        ))}
      {children}
    </div>
  );
};
export default LiveCursorProvider;
