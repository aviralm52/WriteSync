"use client";

import { toast } from "sonner";
import { usePathname } from "next/navigation";
import { FormEvent, useState, useTransition } from "react";

import {
  Dialog,
  DialogTitle,
  DialogHeader,
  DialogContent,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import { inviteUserToDocument } from "@/actions/actions";

import { Input } from "./ui/input";
import { Button } from "./ui/button";

const InviteUser = () => {
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const [email, setEmail] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleInvite = async (e: FormEvent) => {
    e.preventDefault();

    const roomId = pathname.split("/").pop();
    if (!roomId) return;

    startTransition(async () => {
      const { success } = await inviteUserToDocument(roomId, email);

      if (success) {
        setIsOpen(false);
        setEmail("");
        toast.success("User Added To Room successfully");
      } else {
        toast.error("Failed to add user to room");
      }
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <Button asChild variant={"outline"}>
        <DialogTrigger>Invite</DialogTrigger>
      </Button>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>

        <form className=" flex gap-2 " onSubmit={handleInvite}>
          <Input
            type="email"
            placeholder="Email"
            className="w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button type="submit" disabled={!email || isPending}>
            {isPending ? "Inviting.." : "Invite"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
export default InviteUser;
