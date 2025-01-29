import { auth } from "@clerk/nextjs/server";

export const checkAuth = async () => {
  const { userId } = await auth();
  return userId;
};
