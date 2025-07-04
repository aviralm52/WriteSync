import type { Metadata } from "next";

// import Header from "@/components/Header";
// import Sidebar from "@/components/Sidebar";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";

import "./globals.css";

export const metadata: Metadata = {
  title: "WriteSync",
  description: "Feel the power of collaborative writing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          {/* <Header /> */}

          <div className=" flex min-h-screen">
            {/* Sidebar */}
            {/* <Sidebar /> */}

            <div className=" flex-1 p-4 bg-gray-100 overflow-y-auto scrollbar-hide">
              {children}
            </div>
          </div>
          <Toaster position="top-center" />
        </body>
      </html>
    </ClerkProvider>
  );
}
