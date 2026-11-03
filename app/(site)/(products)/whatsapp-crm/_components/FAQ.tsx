'use client'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion"
const faqs = [
  {
    q: "Do I need my own WhatsApp Business API account?",
    a: "Yes. Wispr connects on top of Meta's official WhatsApp Business API. You can use any Meta-approved provider (360dialog, Twilio, Gupshup, Meta Cloud API). Setup takes about 10 minutes with your phone number ID and access token.",
  },
  {
    q: "How is AI billed? Is there a per-seat fee?",
    a: "No AI markup. You bring your own OpenAI or Anthropic API key and pay them directly at cost. Wispr never inserts itself between you and the model provider.",
  },
  {
    q: "Can I import my existing contacts?",
    a: "Absolutely. Drop in a CSV with any columns — Wispr auto-maps standard fields and lets you create custom fields for the rest. Duplicates are merged based on phone number.",
  },
  {
    q: "How does pricing work?",
    a: "Free for teams up to 3 agents with unlimited conversations. Paid plans start at $29/agent/month for teams that need automations, pipelines and advanced analytics.",
  },
  {
    q: "Is my data isolated and secure?",
    a: "Every workspace runs in an isolated tenant with row-level security. Data is encrypted in transit and at rest. We're SOC 2 Type II and GDPR compliant.",
  },
];

export function FAQ() {
  return (
    <section
      id="faq"
      className="relative py-16"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center">
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl text-center">Frequently Asked Questions <br />About <span className="text-[#009e46]">FueledInbox</span></h2>
          <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-2 w-full max-w-6xl mt-10">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((f, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-gray-200 last:border-0 px-4">
                  <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:no-underline">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
