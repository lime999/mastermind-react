import type { Metadata } from "next";
import "./globals.css";





export const metadata: Metadata = {
  title: "mastermind",
  description: "mastermind game built in react with next.js and typescript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
