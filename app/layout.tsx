import type { Metadata } from "next";

import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
   title: "Create Next App",
   description: "Generated by create next app",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <body>
            <div className="w-full h-full flex justify-center items-center flex-col">
               <h1 className="text-4xl">Hello geri Kunja!!</h1>
               <Link href="about">about</Link>
            </div>
            {children}
         </body>
      </html>
   );
}
