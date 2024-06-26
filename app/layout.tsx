import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const IBMPlex = IBM_Plex_Sans({ 
  subsets: ["latin"],
  weight:["400","500","600","700",],
  variable:'--font-ibm-plex'
});

export const metadata: Metadata = {
  title: "Image Wizard AI",
  description: "Generating images using AI",
};
//cn helps merge classes together already in utils done by shadcn 
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{
      variables : { colorPrimary : '#ffa318'}
    }}>
      <html lang="en">
        <body className={cn("font-IBMPlex antialiased", IBMPlex.variable)}>
          {children}
          </body>
      </html>
    </ClerkProvider>
  );
}
