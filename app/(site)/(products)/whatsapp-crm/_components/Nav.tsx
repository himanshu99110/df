import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto mt-4 flex max-w-6xl items-center justify-between rounded-full border border-white/10 bg-white/5 backdrop-blur-xl px-5 py-2.5">
        <a href="#" className="flex items-center gap-2 font-semibold tracking-tight text-[oklch(0.98_0.005_240)]">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-[oklch(0.78_0.17_155)] text-[oklch(0.15_0.02_155)]">
            <MessageCircle className="h-4 w-4" />
          </span>
          <span>WACRM</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-[oklch(0.70_0.02_240)] md:flex">
          <a href="#features" className="hover:text-[oklch(0.98_0.005_240)] transition-colors">Features</a>
          <a href="#automations" className="hover:text-[oklch(0.98_0.005_240)] transition-colors">Automations</a>
          <a href="#pipelines" className="hover:text-[oklch(0.98_0.005_240)] transition-colors">Pipelines</a>
          <a href="#faq" className="hover:text-[oklch(0.98_0.005_240)] transition-colors">FAQ</a>
        </nav>
        <div className="flex items-center gap-2">
          {/* <Button variant="ghost" size="sm" className="hidden sm:inline-flex text-[oklch(0.70_0.02_240)] hover:text-[oklch(0.98_0.005_240)] hover:bg-white/5">Sign in</Button> */}
          <Button size="lg" className="rounded-full bg-[oklch(0.78_0.17_155)] text-[oklch(0.15_0.02_155)] hover:bg-[oklch(0.78_0.17_155/90%)]">Start free</Button>
        </div>
      </div>
    </header>
  );
}