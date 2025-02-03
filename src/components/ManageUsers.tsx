"use client";

import { useState, useTransition } from "react";

import {
  Dialog,
  DialogTitle,
  DialogHeader,
  DialogContent,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import useOwner from "@/lib/useOwner";
import { useUser } from "@clerk/nextjs";
import { useRoom } from "@liveblocks/react";
import { removeUserFromDocument } from "@/actions/actions";

import { Button } from "./ui/button";
import { useCollection } from "react-firebase-hooks/firestore";
import { collectionGroup, query, where } from "firebase/firestore";
import { db } from "../../firebase";
import { toast } from "sonner";

const ManageUsers = () => {
  const room = useRoom();
  const { user } = useUser();
  const isOwner = useOwner();
  const [isPending, startTransition] = useTransition();

  const [isOpen, setIsOpen] = useState(false);

  const [usersInRoom] = useCollection(
    user && query(collectionGroup(db, "rooms"), where("roomId", "==", room.id))
  );

  const handleDelete = (userId: string) => {
    startTransition(async () => {
      if (!user) return;

      const { success } = await removeUserFromDocument(room.id, userId);

      if (success) {
        toast.success("User removed from room successfully");
      } else {
        toast.error("Failed to remove user from room");
      }
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <Button asChild variant={"outline"}>
        <DialogTrigger>
          Users {"( "}
          {usersInRoom?.docs?.length}
          {" )"}
        </DialogTrigger>
      </Button>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Users with Access</DialogTitle>
          <DialogDescription>
            Below is the list of users who have access to this document
          </DialogDescription>
        </DialogHeader>

        <hr className=" my-2" />

        <div className=" flex flex-col  space-y-2">
          {usersInRoom?.docs.map((doc) => (
            <div
              key={doc.data().userId}
              className=" flex items-center justify-between"
            >
              <p className=" font-light">
                {doc.data().userId === user?.emailAddresses[0].toString()
                  ? `You (${doc.data().userId})`
                  : doc.data().userId}
              </p>

              <div className=" flex items-center gap-2">
                <Button variant={"outline"}>{doc.data().role}</Button>
                {isOwner &&
                  doc.data().userId !== user?.emailAddresses[0].toString() && (
                    <Button
                      variant={"destructive"}
                      onClick={() => handleDelete(doc.data().userId)}
                      disabled={isPending}
                      size={"sm"}
                    >
                      {isPending ? "Removing..." : "X"}
                    </Button>
                  )}
              </div>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};
export default ManageUsers;
