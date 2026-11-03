import { MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-14">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-[oklch(0.78_0.17_155)] text-[oklch(0.15_0.02_155)]">
              <MessageCircle className="h-4 w-4" />
            </span>
            WACRM
          </div>
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-[oklch(0.70_0.02_240)]">
            <a href="#features" className="hover:text-[oklch(0.98_0.005_240)] transition-colors">Features</a>
            <a href="#automations" className="hover:text-[oklch(0.98_0.005_240)] transition-colors">Automations</a>
            <a href="#pipelines" className="hover:text-[oklch(0.98_0.005_240)] transition-colors">Pipelines</a>
            <a href="#faq" className="hover:text-[oklch(0.98_0.005_240)] transition-colors">FAQ</a>
            <a href="#" className="hover:text-[oklch(0.98_0.005_240)] transition-colors">Pricing</a>
            <a href="#" className="hover:text-[oklch(0.98_0.005_240)] transition-colors">Docs</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}