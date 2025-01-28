"use client";

import { use } from "react";

import Document from "@/components/Document";

const DocumentPage = ({ params }: { params: { id: string } }) => {
  // const resolvedParams = use(params);

  return (
    <div className=" flex flex-col flex-1 min-h-screen">
      <Document id={params.id} />
    </div>
  );
};
export default DocumentPage;
