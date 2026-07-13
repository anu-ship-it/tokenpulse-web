import React from "react";

// Simple MDX renderer without next-mdx-remote
// Parses and renders MDX content as plain React

interface Props {
  source: string;
}

function parseMDX(content: string): React.ReactNode[] {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;
  let key = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Code block
    if (line.startsWith("```")) {
      const codeLines: string[] = [];
      i++;
      while (i < lines.length && !lines[i].startsWith("```")) {
        codeLines.push(lines[i]);
        i++;
      }
      elements.push(
        <pre
          key={key++}
          className="bg-[#0E0E11] border border-white/8 rounded-xl p-5 overflow-x-auto mb-6 font-mono text-[13px] text-[#EDEEF2] leading-relaxed"
        >
          <code>{codeLines.join("\n")}</code>
        </pre>,
      );
      i++;
      continue;
    }

    // H1
    if (line.startsWith("# ")) {
      elements.push(
        <h1
          key={key++}
          className="text-[32px] font-bold tracking-[-0.04em] text-[#EDEEF2] mt-10 mb-5 leading-tight"
        >
          {renderInline(line.slice(2))}
        </h1>,
      );
      i++;
      continue;
    }
    // H2
    if (line.startsWith("## ")) {
      elements.push(
        <h2
          key={key++}
          className="text-[24px] font-bold tracking-[-0.03em] text-[#EDEEF2] mt-10 mb-4 leading-tight"
        >
          {renderInline(line.slice(3))}
        </h2>,
      );
      i++;
      continue;
    }
    // H3
    if (line.startsWith("### ")) {
      elements.push(
        <h3
          key={key++}
          className="text-[18px] font-bold text-[#EDEEF2] mt-8 mb-3"
        >
          {renderInline(line.slice(4))}
        </h3>,
      );
      i++;
      continue;
    }

    // HR
    if (line.trim() === "---") {
      elements.push(<hr key={key++} className="border-white/8 my-10" />);
      i++;
      continue;
    }

    // Blockquote
    if (line.startsWith("> ")) {
      elements.push(
        <blockquote
          key={key++}
          className="border-l-2 border-[#6C5FFF] pl-5 my-6 text-[#72728A] italic"
        >
          {renderInline(line.slice(2))}
        </blockquote>,
      );
      i++;
      continue;
    }

    // Unordered list
    if (line.startsWith("- ")) {
      const items: string[] = [];
      while (i < lines.length && lines[i].startsWith("- ")) {
        items.push(lines[i].slice(2));
        i++;
      }
      elements.push(
        <ul key={key++} className="space-y-2 mb-6">
          {items.map((item, idx) => (
            <li
              key={idx}
              className="flex items-start gap-2 text-[15px] text-[#72728A] leading-relaxed"
            >
              <span className="text-[#6C5FFF] flex-shrink-0 mt-0.5">→</span>
              <span>{renderInline(item)}</span>
            </li>
          ))}
        </ul>,
      );
      continue;
    }

    // Empty line
    if (line.trim() === "") {
      i++;
      continue;
    }

    // Paragraph
    const paraLines: string[] = [];
    while (
      i < lines.length &&
      lines[i].trim() !== "" &&
      !lines[i].startsWith("#") &&
      !lines[i].startsWith("```") &&
      !lines[i].startsWith("- ") &&
      !lines[i].startsWith("> ")
    ) {
      paraLines.push(lines[i]);
      i++;
    }
    if (paraLines.length > 0) {
      elements.push(
        <p
          key={key++}
          className="text-[15px] text-[#72728A] leading-[1.85] mb-5"
        >
          {renderInline(paraLines.join(" "))}
        </p>,
      );
    }
  }

  return elements;
}

function renderInline(text: string): React.ReactNode {
  // Bold+italic, bold, italic, inline code, links
  const parts: React.ReactNode[] = [];
  let remaining = text;
  let key = 0;

  while (remaining.length > 0) {
    // Bold: **text**
    const boldMatch = remaining.match(/\*\*(.+?)\*\*/);
    // Inline code: `code`
    const codeMatch = remaining.match(/`([^`]+)`/);
    // Link: [text](url)
    const linkMatch = remaining.match(/\[(.+?)\]\((.+?)\)/);

    const matches = [
      boldMatch
        ? {
            index: boldMatch.index!,
            length: boldMatch[0].length,
            type: "bold",
            content: boldMatch[1],
          }
        : null,
      codeMatch
        ? {
            index: codeMatch.index!,
            length: codeMatch[0].length,
            type: "code",
            content: codeMatch[1],
          }
        : null,
      linkMatch
        ? {
            index: linkMatch.index!,
            length: linkMatch[0].length,
            type: "link",
            content: linkMatch[1],
            href: linkMatch[2],
          }
        : null,
    ].filter(Boolean) as Array<{
      index: number;
      length: number;
      type: string;
      content: string;
      href?: string;
    }>;

    if (matches.length === 0) {
      parts.push(remaining);
      break;
    }

    // Pick earliest match
    matches.sort((a, b) => a.index - b.index);
    const first = matches[0];

    if (first.index > 0) {
      parts.push(remaining.slice(0, first.index));
    }

    if (first.type === "bold") {
      parts.push(
        <strong key={key++} className="text-[#EDEEF2] font-semibold">
          {first.content}
        </strong>,
      );
    } else if (first.type === "code") {
      parts.push(
        <code
          key={key++}
          className="font-mono text-[13px] text-[#00E5A0] bg-[rgba(0,229,160,0.08)] border border-[rgba(0,229,160,0.18)] px-1.5 py-0.5 rounded"
        >
          {first.content}
        </code>,
      );
    } else if (first.type === "link") {
      parts.push(
        <a
          key={key++}
          href={first.href}
          className="text-[#6C5FFF] hover:text-[#9B8FFF] underline underline-offset-2 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          {first.content}
        </a>,
      );
    }

    remaining = remaining.slice(first.index + first.length);
  }

  return parts.length === 1 && typeof parts[0] === "string" ? (
    parts[0]
  ) : (
    <>{parts}</>
  );
}

export default function MDXContent({ source }: Props) {
  return <div>{parseMDX(source)}</div>;
}
