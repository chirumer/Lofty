import "./globals.css";
import { getLoftyDocument } from "../lib/lofty-document";

export default function RootLayout() {
  const { htmlStyle, headInnerHtml, bodyInnerHtml } = getLoftyDocument();

  return (
    <html lang="en" suppressHydrationWarning style={htmlStyle}>
      <head dangerouslySetInnerHTML={{ __html: headInnerHtml }} />
      <body suppressHydrationWarning dangerouslySetInnerHTML={{ __html: bodyInnerHtml }} />
    </html>
  );
}
