"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";

import { createNewDocument } from "@/actions/actions";

import { Button } from "./ui/button";
import { useAuth } from "@clerk/nextjs";

const NewDocumentButton = () => {
  const router = useRouter();

  const { isSignedIn } = useAuth();

  const [isPending, startTransition] = useTransition();

  const handleCreateNewDocument = () => {
    if (!isSignedIn) {
      router.push("/sign-in");
    }
    startTransition(async () => {
      const { docId } = await createNewDocument();
      router.push(`/doc/${docId}`);
    });
  };

  return (
    <div>
      <Button onClick={handleCreateNewDocument} disabled={isPending} className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-6">
        {isPending ? "Creating..." : "New Document"}
      </Button>
    </div>
  );
};
export default NewDocumentButton;
