"use client";

import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";

const Header = () => {
  const { user } = useUser();

  return (
    <div className=" flex items-center justify-between p-5">
      {user && (
        <h1 className=" text-2xl">
          {user.fullName}
          {`'s`} Space
        </h1>
      )}

      {/* Breadcrumbs */}
      <SignedOut>
        <SignInButton />
      </SignedOut>

      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
};
export default Header;
