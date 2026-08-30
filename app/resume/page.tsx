import Link from "next/link";
import { ArrowLeft, Download } from "lucide-react";

export default function ResumePage() {
  return (
    <main className="container-width relative z-10 min-h-screen py-8 md:py-10">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <Link href="/" className="btn-secondary px-4 py-2 text-sm">
          <ArrowLeft size={16} /> Back to Portfolio
        </Link>

        <a href="/resume.pdf" download="Suman-Roy-Resume.pdf" className="btn-primary px-4 py-2 text-sm">
          <Download size={16} /> Download PDF
        </a>
      </div>

      <div className="surface-card mt-6 overflow-hidden p-2 md:p-3">
        <iframe src="/resume.pdf" title="Resume PDF" className="h-[78vh] w-full rounded-[1.35rem] bg-white" />
      </div>
    </main>
  );
}
