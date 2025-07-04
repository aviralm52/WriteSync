import { NextRequest, NextResponse } from "next/server";

import liveblocks from "@/lib/liveblocks";
import { auth } from "@clerk/nextjs/server";

import { adminDb } from "../../../../firebase-admin";

export async function POST(req: NextRequest) {
  const { userId, redirectToSignIn, sessionClaims } = await auth();
  if (!userId) redirectToSignIn();

  const { room } = await req.json();

  const session = liveblocks.prepareSession(sessionClaims?.email ?? "", {
    userInfo: {
      name: sessionClaims?.fullName ?? "John Doe",
      email: sessionClaims?.email ?? "temp@gmail.com",
      avatar: sessionClaims?.image ?? "",
    },
  });

  const usersInRoom = await adminDb
    .collectionGroup("rooms")
    .where("userId", "==", sessionClaims?.email)
    .get();

  const userInRoom = usersInRoom.docs.find((doc) => doc.id === room);

  if (userInRoom?.exists) {
    session.allow(room, session.FULL_ACCESS);
    const { body, status } = await session.authorize();

    return new Response(body, { status });
  } else {
    return NextResponse.json(
      { message: "You are not part of this room" },
      { status: 403 }
    );
  }
}
