import type { Metadata } from "next";
import "../src/styles.css";

export const metadata: Metadata = {
  title: "Lofty Setup Studio",
  description: "A Lofty-inspired role-aware setup builder for real estate teams."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
