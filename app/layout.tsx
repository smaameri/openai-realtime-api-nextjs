import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "realtime console",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <head>
      <title>realtime console</title>
      <link rel="icon" href="/public/openai-logomark.svg"/>
    </head>
    <body
      >
        {children}
      </body>
    </html>
  );
}
