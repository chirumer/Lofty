import "./globals.css";
import { getLoftyDocumentAssets } from "../lib/lofty-document";

export default function RootLayout({ children }) {
  const { htmlStyle, iconHref, inlineStyles, stylesheets, title } = getLoftyDocumentAssets();

  return (
    <html lang="en" style={htmlStyle}>
      <head>
        <title>{title}</title>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        {iconHref ? <link rel="icon" href={iconHref} /> : null}
        {stylesheets.map((href) => (
          <link key={href} rel="stylesheet" href={href} />
        ))}
        {inlineStyles.map((cssText, index) => (
          <style key={index}>{cssText}</style>
        ))}
      </head>
      <body>{children}</body>
    </html>
  );
}
