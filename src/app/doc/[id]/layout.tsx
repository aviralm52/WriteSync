import { auth } from "@clerk/nextjs/server";
import RoomProvider from "@/components/RoomProvider";
import { checkAuth } from "@/lib/auth";
import { redirect } from "next/navigation";

const DocLayout = async ({
  children,
  params: { id },
}: {
  children: React.ReactNode;
  params: { id: string };
}) => {
  const { userId, redirectToSignIn } = await auth();
  if (!userId) redirectToSignIn();

  //   checkAuth().then((userId) => {
  //     if (!userId) redirect("/sign-in");
  //   });

  return <RoomProvider roomId={id}>{children}</RoomProvider>;
};

// function DocLayout({
//   children,
//   params: { id },
// }: {
//   children: React.ReactNode;
//   params: { id: string };
// }) {
//   checkAuth().then((userId) => {
//     if (!userId) redirect("/sign-in");
//   });

//   return <RoomProvider roomId={id}>{children}</RoomProvider>;
// }
export default DocLayout;
