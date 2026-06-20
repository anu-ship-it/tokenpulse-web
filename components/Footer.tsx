import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border2 px-6 md:px-10 py-8 flex flex-col md:flex-row items-center justify-between gap-3">
      <div className="text-xs text-text-muted text-center md:text-left">
        © {new Date().getFullYear()}{" "}
        <span className="text-teal-dim">TokenPulse</span> · Built by Anoop
        Kumar and Mansi Rathore · Alpha
      </div>
      <div className="flex items-center gap-5">
        <Link
          href="/privacy"
          className="text-xs text-text-muted hover:text-teal transition-colors"
        >
          Privacy
        </Link>
        <Link
          href="/changelog"
          className="text-xs text-text-muted hover:text-teal transition-colors"
        >
          Changelog
        </Link>
        <a
          href="https://github.com/anu-ship-it/TokenPulse"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-text-muted hover:text-teal transition-colors"
        >
          GitHub
        </a>
        <a
          href="mailto:anup17508@gmail.com"
          className="text-xs text-text-muted hover:text-teal transition-colors"
        >
          Contact
        </a>
      </div>
    </footer>
  );
}
