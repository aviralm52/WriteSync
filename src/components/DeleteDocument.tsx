"use client";

import { toast } from "sonner";
import { useState, useTransition } from "react";
import { usePathname, useRouter } from "next/navigation";

import {
  Dialog,
  DialogTitle,
  DialogHeader,
  DialogContent,
  DialogTrigger,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { deleteDocument } from "@/actions/actions";

import { Button } from "./ui/button";

const DeleteDocument = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const [isOpen, setIsOpen] = useState(false);

  const handleDelete = async () => {
    const roomId = pathname.split("/").pop();
    if (!roomId) return;

    startTransition(async () => {
      const { success } = await deleteDocument(roomId);

      if (success) {
        setIsOpen(false);
        router.replace("/");
        toast.success("Room deleted successfully");
      } else {
        toast.error("Failed to delete roomF");
      }
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <Button asChild variant={"destructive"}>
        <DialogTrigger>Delete</DialogTrigger>
      </Button>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className=" sm:justify-end gap-2">
          <Button
            type="button"
            variant={"destructive"}
            onClick={handleDelete}
            disabled={isPending}
          >
            {isPending ? "Deleting..." : "Delete"}
          </Button>
          <DialogClose asChild>
            <Button type="button" variant={"secondary"}>
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
export default DeleteDocument;
