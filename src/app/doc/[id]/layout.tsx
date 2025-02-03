import RoomProvider from "@/components/RoomProvider";

const DocLayout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ id: string }>;
}) => {

  const id = (await params).id;

  return <RoomProvider roomId={id}>{children}</RoomProvider>;
};

export default DocLayout;
