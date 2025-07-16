import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ConvexClientProvider } from "@/components/convex-client-provider";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";

const inter =Inter({subsets: ['latin']});

export const metadata = {
  title: "Splitr",
  description: "Smartest way to split expenses with friends",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logos/logo.png" sizes="any"/>        
      </head>
      <body
        className={`${inter.className}`}
      >
        <ClerkProvider>
        <ConvexClientProvider>
        <Header/>
        <main className="min-h-screen">
          <Toaster richColors />

          {children}
        </main>
        </ConvexClientProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
