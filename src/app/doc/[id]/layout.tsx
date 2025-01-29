import { auth } from "@clerk/nextjs/server";
import RoomProvider from "@/components/RoomProvider";

const DocLayout = async ({
  children,
  params: { id },
}: {
  children: React.ReactNode;
  params: { id: string };
}) => {
  const { userId, redirectToSignIn } = await auth();
  if (!userId) redirectToSignIn();

  return <RoomProvider roomId={id}>{children}</RoomProvider>;
};

export default DocLayout;
