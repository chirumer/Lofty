import fs from "node:fs";
import path from "node:path";

let cachedDocument = null;
let cachedSourcePath = null;

function resolveSourcePath() {
  const explicitPath = process.env.LOFTY_DOCUMENT_PATH;
  if (explicitPath) {
    return path.resolve(process.cwd(), explicitPath);
  }

  const frozenPath = path.join(process.cwd(), "Lofty.frozen.html");
  if (fs.existsSync(frozenPath)) {
    return frozenPath;
  }

  return path.join(process.cwd(), "Lofty.html");
}

function decodeHtmlEntities(value) {
  return value
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

function parseStyleAttribute(styleText) {
  if (!styleText) {
    return undefined;
  }

  const decoded = decodeHtmlEntities(styleText);
  return decoded.split(";").reduce((acc, declaration) => {
    const trimmed = declaration.trim();
    if (!trimmed) {
      return acc;
    }

    const separatorIndex = trimmed.indexOf(":");
    if (separatorIndex === -1) {
      return acc;
    }

    const key = trimmed.slice(0, separatorIndex).trim();
    const value = trimmed.slice(separatorIndex + 1).trim();
    if (key) {
      acc[key] = value;
    }

    return acc;
  }, {});
}

export function getLoftyDocument() {
  const sourcePath = resolveSourcePath();

  if (cachedDocument && cachedSourcePath === sourcePath) {
    return cachedDocument;
  }

  const html = fs.readFileSync(sourcePath, "utf8");

  const htmlTagMatch = html.match(/<html\b([^>]*)>/i);
  const htmlStyleMatch = htmlTagMatch?.[1]?.match(/style="([^"]*)"/i);
  const headMatch = html.match(/<head>([\s\S]*?)<\/head>/i);
  const bodyMatch = html.match(/<body>([\s\S]*?)<\/body>/i);

  cachedDocument = {
    htmlStyle: parseStyleAttribute(htmlStyleMatch?.[1] ?? ""),
    headInnerHtml: headMatch?.[1] ?? "",
    bodyInnerHtml: bodyMatch?.[1] ?? "",
  };
  cachedSourcePath = sourcePath;

  return cachedDocument;
}
