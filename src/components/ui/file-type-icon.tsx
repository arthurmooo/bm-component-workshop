import { FileText } from "lucide-react";
import "./file-type-icon.css";

const aliases: Record<string, string> = { jpeg: "jpg", tiff: "tif" };

export function FileTypeIcon({ filename, type, size = "medium", className = "" }: {
  filename?: string;
  type?: string;
  size?: "small" | "medium";
  className?: string;
}) {
  const raw = (type || filename?.split(".").pop() || "file").toLowerCase();
  const extension = aliases[raw] || raw;
  const family = ["xls", "xlsx", "csv"].includes(extension) ? "sheet"
    : ["doc", "docx", "odt", "txt"].includes(extension) ? "document"
    : ["ppt", "pptx", "key"].includes(extension) ? "slides"
    : ["png", "jpg", "gif", "svg", "webp", "tif"].includes(extension) ? "image"
    : ["zip", "rar", "7z"].includes(extension) ? "archive"
    : extension === "pdf" ? "pdf" : "generic";

  return <span className={`file-type-icon is-${family} is-${size} ${className}`.trim()} aria-hidden="true">
    <FileText size={size === "small" ? 15 : 19} />
    <small>{extension.slice(0, 4).toUpperCase()}</small>
  </span>;
}
