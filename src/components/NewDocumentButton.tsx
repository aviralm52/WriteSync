"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";

import { createNewDocument } from "@/actions/actions";

import { Button } from "./ui/button";

const NewDocumentButton = () => {
  const router = useRouter();

  const [isPending, startTransition] = useTransition();

  const handleCreateNewDocument = () => {
    startTransition(async () => {
      const { docId } = await createNewDocument();
      router.push(`/doc/${docId}`);
    });
  };

  return (
    <div>
      <Button onClick={handleCreateNewDocument} disabled={isPending}>
        {isPending ? "Creating..." : "New Document"}
      </Button>
    </div>
  );
};
export default NewDocumentButton;
