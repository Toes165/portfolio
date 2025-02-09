import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anderson's Portfolio",
  description: "Anderson To's Portfolio created with NextJs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
