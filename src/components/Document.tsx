import { doc, updateDoc } from "firebase/firestore";
import { FormEvent, useState, useTransition } from "react";

import { Input } from "./ui/input";
import { db } from "../../firebase";
import { Button } from "./ui/button";

const Document = ({ id }: { id: string }) => {
  const [isUpdating, startTransition] = useTransition();

  const [input, setInput] = useState("");

  const updateTitle = (e: FormEvent) => {
    e.preventDefault();

    if (input.trim()) {
      startTransition(async () => {
        await updateDoc(doc(db, "documents", id), { title: input });
      });
    }
  };

  return (
    <div>
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
        </form>
      </div>

      <div>
        {/* Manage Users */}

        {/* Avatars */}
      </div>

      {/* Collaborative Editor */}
    </div>
  );
};
export default Document;
