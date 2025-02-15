"use client";

import { doc, updateDoc } from "firebase/firestore";
import { useDocumentData } from "react-firebase-hooks/firestore";
import { FormEvent, useEffect, useState, useTransition } from "react";

import useOwner from "@/lib/useOwner";

import Editor from "./Editor";
import { Input } from "./ui/input";
import { db } from "../../firebase";
import { Button } from "./ui/button";
import InviteUser from "./InviteUser";
import ManageUsers from "./ManageUsers";
import DeleteDocument from "./DeleteDocument";

const Document = ({ id }: { id: string }) => {
  const [isUpdating, startTransition] = useTransition();
  const [data] = useDocumentData(doc(db, "documents", id));
  const isOwner = useOwner();

  const [input, setInput] = useState("");

  useEffect(() => {
    if (data) {
      setInput(data.title);
    }
  }, [data]);

  const updateTitle = (e: FormEvent) => {
    e.preventDefault();

    if (input.trim()) {
      startTransition(async () => {
        await updateDoc(doc(db, "documents", id), { title: input });
      });
    }
  };

  return (
    <div className=" flex-1 h-full bg-white p-5">
      <div className=" flex max-w-4xl mx-auto justify-between pb-5">
        <form className=" flex flex-1 space-x-2" onSubmit={updateTitle}>
          {/* update title... */}
          <Input
            value={input}
            placeholder="Enter new name for the docoument..."
            onChange={(e) => setInput(e.target.value)}
            className=" border border-neutral-600"
          />
          <Button type="submit" disabled={isUpdating}>
            {isUpdating ? "Updating..." : "Update"}
          </Button>

          {/* IF */}
          {isOwner && (
            <>
              {/* Invite User */}
              <InviteUser />

              {/* Delete Document */}
              <DeleteDocument />
            </>
          )}
        </form>
      </div>

      <div className=" flex max-w-6xl mx-auto justify-between items-center mb-5">
        {/* Manage Users */}
        <ManageUsers />

        {/* Avatars */}
        {/* <Avatars /> */}
      </div>

      {/* Collaborative Editor */}
      <Editor />
    </div>
  );
};
export default Document;
