import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { getLoftyDocumentAssets } from "../lib/lofty-document";
import "../src/lofty-shell.css";
import "../src/styles.css";

const loftyDocumentAssets = getLoftyDocumentAssets();

export const metadata: Metadata = {
  title: loftyDocumentAssets.title || "Lofty Setup Studio",
  description: "A Lofty-inspired role-aware setup builder for real estate teams.",
  icons: {
    icon: loftyDocumentAssets.iconHref || "/favicon-lofty.png",
    shortcut: loftyDocumentAssets.iconHref || "/favicon-lofty.png",
    apple: loftyDocumentAssets.iconHref || "/favicon-lofty.png"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" style={loftyDocumentAssets.htmlStyle as CSSProperties | undefined}>
      <head>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        {loftyDocumentAssets.stylesheets.map((href) => (
          <link key={href} rel="stylesheet" href={href} />
        ))}
        {loftyDocumentAssets.inlineStyles.map((cssText, index) => (
          <style key={index}>{cssText}</style>
        ))}
      </head>
      <body>{children}</body>
    </html>
  );
}
