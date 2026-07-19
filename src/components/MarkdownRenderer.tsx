import React from "react";

interface MarkdownRendererProps {
  markdown: string;
}

export function MarkdownRenderer({ markdown }: MarkdownRendererProps) {
  // Simple block-based parser
  const lines = markdown.split(/\r?\n/);
  const blocks: { type: string; content: string[]; listType?: "bullet" | "ordered" }[] = [];
  let currentBlockType = "paragraph";
  let currentBlockContent: string[] = [];

  const flushBlock = () => {
    if (currentBlockContent.length > 0) {
      blocks.push({
        type: currentBlockType,
        content: [...currentBlockContent],
      });
      currentBlockContent = [];
    }
  };

  let inCodeBlock = false;
  let codeBlockLanguage = "";

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Handle Code Blocks
    if (line.trim().startsWith("```")) {
      if (inCodeBlock) {
        // End of code block
        flushBlock();
        inCodeBlock = false;
      } else {
        // Start of code block
        flushBlock();
        inCodeBlock = true;
        codeBlockLanguage = line.trim().slice(3);
        currentBlockType = `code-${codeBlockLanguage || "text"}`;
      }
      continue;
    }

    if (inCodeBlock) {
      currentBlockContent.push(line);
      continue;
    }

    const trimmedLine = line.trim();

    // Empty line separates blocks
    if (trimmedLine === "") {
      flushBlock();
      currentBlockType = "paragraph";
      continue;
    }

    // Headers
    if (trimmedLine.startsWith("#")) {
      flushBlock();
      const level = trimmedLine.match(/^#+/)?.[0].length || 1;
      const text = trimmedLine.replace(/^#+\s*/, "");
      blocks.push({
        type: `h${Math.min(level, 6)}`,
        content: [text],
      });
      continue;
    }

    // Horizontal Rule
    if (trimmedLine === "---" || trimmedLine === "***" || trimmedLine === "___") {
      flushBlock();
      blocks.push({
        type: "hr",
        content: [""],
      });
      continue;
    }

    // Blockquote
    if (trimmedLine.startsWith(">")) {
      if (currentBlockType !== "blockquote") {
        flushBlock();
        currentBlockType = "blockquote";
      }
      currentBlockContent.push(trimmedLine.replace(/^>\s*/, ""));
      continue;
    }

    // Unordered List Item
    if (/^[-*+]\s+/.test(trimmedLine)) {
      if (currentBlockType !== "ul") {
        flushBlock();
        currentBlockType = "ul";
      }
      currentBlockContent.push(trimmedLine.replace(/^[-*+]\s+/, ""));
      continue;
    }

    // Ordered List Item
    if (/^\d+\.\s+/.test(trimmedLine)) {
      if (currentBlockType !== "ol") {
        flushBlock();
        currentBlockType = "ol";
      }
      currentBlockContent.push(trimmedLine.replace(/^\d+\.\s+/, ""));
      continue;
    }

    // Default: regular paragraph line
    if (currentBlockType !== "paragraph") {
      flushBlock();
      currentBlockType = "paragraph";
    }
    currentBlockContent.push(line);
  }

  // Flush remaining block
  flushBlock();

  // Helper to parse inline styles: Bold, Italic, Code, Links, Images
  const parseInline = (text: string): React.ReactNode[] => {
    // We can tokenize the text and output React nodes
    const tokens: React.ReactNode[] = [];
    let remaining = text;
    let keyIdx = 0;

    // Simple parser for Images, Links, Bold, Italic, Inline Code
    while (remaining.length > 0) {
      // 1. Image: ! [alt] (url)
      const imgMatch = remaining.match(/^!\[([^\]]*)\]\(([^)]*)\)/);
      if (imgMatch) {
        tokens.push(
          <img
            key={keyIdx++}
            src={imgMatch[2]}
            alt={imgMatch[1]}
            className="rounded-lg max-w-full my-4 border border-sand-200 dark:border-sand-800"
            referrerPolicy="no-referrer"
          />
        );
        remaining = remaining.slice(imgMatch[0].length);
        continue;
      }

      // 2. Link: [text] (url)
      const linkMatch = remaining.match(/^\[([^\]]+)\]\(([^)]+)\)/);
      if (linkMatch) {
        const url = linkMatch[2];
        const isExternal = url.startsWith("http");
        tokens.push(
          <a
            key={keyIdx++}
            href={url}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            className="text-amber-600 dark:text-amber-400 hover:underline font-semibold transition-colors"
          >
            {linkMatch[1]}
          </a>
        );
        remaining = remaining.slice(linkMatch[0].length);
        continue;
      }

      // 3. Bold: **text** or __text__
      const boldMatch = remaining.match(/^(\*\*|__)(.*?)\1/);
      if (boldMatch) {
        tokens.push(
          <strong key={keyIdx++} className="font-semibold text-sand-900 dark:text-sand-50">
            {boldMatch[2]}
          </strong>
        );
        remaining = remaining.slice(boldMatch[0].length);
        continue;
      }

      // 4. Italic: *text* or _text_
      const italicMatch = remaining.match(/^(\*|_)(.*?)\1/);
      if (italicMatch) {
        tokens.push(
          <em key={keyIdx++} className="italic text-sand-800 dark:text-sand-200">
            {italicMatch[2]}
          </em>
        );
        remaining = remaining.slice(italicMatch[0].length);
        continue;
      }

      // 5. Inline Code: `code`
      const codeMatch = remaining.match(/^`(.*?)`/);
      if (codeMatch) {
        tokens.push(
          <code
            key={keyIdx++}
            className="bg-sand-100 dark:bg-sand-900 text-sand-800 dark:text-sand-200 px-1.5 py-0.5 rounded text-sm font-mono"
          >
            {codeMatch[1]}
          </code>
        );
        remaining = remaining.slice(codeMatch[0].length);
        continue;
      }

      // If no match, take characters up to the next potential token
      const nextSpecial = remaining.search(/[!*_\[`]/);
      if (nextSpecial === -1) {
        tokens.push(<span key={keyIdx++}>{remaining}</span>);
        break;
      } else if (nextSpecial === 0) {
        // Character is special but didn't match regex patterns, consume 1 character
        tokens.push(<span key={keyIdx++}>{remaining[0]}</span>);
        remaining = remaining.slice(1);
      } else {
        tokens.push(<span key={keyIdx++}>{remaining.slice(0, nextSpecial)}</span>);
        remaining = remaining.slice(nextSpecial);
      }
    }

    return tokens;
  };

  return (
    <div className="space-y-4 text-sand-600 dark:text-sand-300 leading-relaxed font-sans text-base">
      {blocks.map((block, idx) => {
        const key = `block-${idx}`;
        if (block.type.startsWith("h")) {
          const level = parseInt(block.type.slice(1));
          const textContent = block.content.join(" ");
          const children = parseInline(textContent);
          if (level === 1) {
            return (
              <h1 key={key} className="text-2xl sm:text-3xl font-serif font-semibold text-sand-900 dark:text-sand-50 tracking-tight pt-4 pb-2 border-b border-sand-100 dark:border-sand-800/80">
                {children}
              </h1>
            );
          }
          if (level === 2) {
            return (
              <h2 key={key} className="text-xl sm:text-2xl font-serif font-semibold text-sand-900 dark:text-sand-50 tracking-tight pt-3 pb-1">
                {children}
              </h2>
            );
          }
          if (level === 3) {
            return (
              <h3 key={key} className="text-lg sm:text-xl font-sans font-semibold text-sand-900 dark:text-sand-50 tracking-tight pt-2">
                {children}
              </h3>
            );
          }
          return (
            <h4 key={key} className="text-base sm:text-lg font-sans font-medium text-sand-900 dark:text-sand-50 pt-2">
              {children}
            </h4>
          );
        }

        if (block.type === "ul") {
          return (
            <ul key={key} className="list-disc list-inside pl-4 space-y-2 my-2">
              {block.content.map((item, itemIdx) => (
                <li key={itemIdx} className="marker:text-amber-500">
                  <span className="pl-1">{parseInline(item)}</span>
                </li>
              ))}
            </ul>
          );
        }

        if (block.type === "ol") {
          return (
            <ol key={key} className="list-decimal list-inside pl-4 space-y-2 my-2">
              {block.content.map((item, itemIdx) => (
                <li key={itemIdx} className="marker:text-amber-500/80 marker:font-mono">
                  <span className="pl-1">{parseInline(item)}</span>
                </li>
              ))}
            </ol>
          );
        }

        if (block.type === "blockquote") {
          return (
            <blockquote key={key} className="border-l-4 border-amber-500 dark:border-amber-400 pl-4 py-1 my-4 italic text-sand-700 dark:text-sand-400 bg-sand-50 dark:bg-sand-900/30 rounded-r-md">
              {block.content.map((line, lineIdx) => (
                <p key={lineIdx}>{parseInline(line)}</p>
              ))}
            </blockquote>
          );
        }

        if (block.type.startsWith("code-")) {
          return (
            <div key={key} className="relative group my-4 rounded-lg overflow-hidden border border-sand-200 dark:border-sand-800">
              <div className="flex items-center justify-between px-4 py-1.5 bg-sand-100 dark:bg-sand-900/80 text-xs font-mono text-sand-500 border-b border-sand-200 dark:border-sand-800">
                <span>{block.type.slice(5).toUpperCase()}</span>
              </div>
              <pre className="p-4 bg-sand-50/50 dark:bg-sand-950/90 text-sm font-mono overflow-x-auto text-sand-800 dark:text-sand-200 leading-normal">
                <code>{block.content.join("\n")}</code>
              </pre>
            </div>
          );
        }

        if (block.type === "hr") {
          return <hr key={key} className="my-6 border-sand-200 dark:border-sand-800" />;
        }

        // Paragraph
        return (
          <p key={key} className="mb-4">
            {parseInline(block.content.join(" "))}
          </p>
        );
      })}
    </div>
  );
}
