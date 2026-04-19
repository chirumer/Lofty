import fs from "node:fs";
import path from "node:path";

let cachedDocumentAssets = null;
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

function getTagAttributes(tagText) {
  return [...tagText.matchAll(/([^\s=/>]+)(?:="([^"]*)")?/g)].reduce((acc, match) => {
    const [, key, value = ""] = match;
    if (key !== "link" && key !== "style" && key !== "meta") {
      acc[key.toLowerCase()] = value;
    }
    return acc;
  }, {});
}

export function getLoftyDocumentAssets() {
  const sourcePath = resolveSourcePath();

  if (cachedDocumentAssets && cachedSourcePath === sourcePath) {
    return cachedDocumentAssets;
  }

  const html = fs.readFileSync(sourcePath, "utf8");

  const htmlTagMatch = html.match(/<html\b([^>]*)>/i);
  const htmlStyleMatch = htmlTagMatch?.[1]?.match(/style="([^"]*)"/i);
  const headMatch = html.match(/<head>([\s\S]*?)<\/head>/i);
  const headHtml = headMatch?.[1] ?? "";
  const linkAttributes = [...headHtml.matchAll(/<link\b[^>]*>/gi)].map((match) => getTagAttributes(match[0]));
  const stylesheets = linkAttributes
    .filter((attributes) => attributes.rel?.toLowerCase() === "stylesheet" && attributes.href)
    .map((attributes) => attributes.href)
    .filter((href, index, list) => list.indexOf(href) === index);
  const iconHref =
    linkAttributes.find((attributes) => {
      const rel = attributes.rel?.toLowerCase() ?? "";
      return rel === "icon" && attributes.href;
    })?.href ?? "";
  const title = headHtml.match(/<title>([\s\S]*?)<\/title>/i)?.[1]?.trim() ?? "Lofty";
  const inlineStyles = [...headHtml.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/gi)]
    .map((match) => match[1])
    .filter((cssText, index, list) => {
      if (!cssText.trim()) {
        return false;
      }

      if (cssText.includes("pointer-events: none !important;")) {
        return false;
      }

      return list.indexOf(cssText) === index;
    });

  cachedDocumentAssets = {
    htmlStyle: parseStyleAttribute(htmlStyleMatch?.[1] ?? ""),
    iconHref,
    inlineStyles,
    stylesheets,
    title,
  };
  cachedSourcePath = sourcePath;

  return cachedDocumentAssets;
}
