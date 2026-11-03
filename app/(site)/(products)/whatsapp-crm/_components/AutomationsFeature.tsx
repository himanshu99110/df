'use client'
import { motion } from "framer-motion";
import { Zap, GitBranch, Clock, ScrollText, MessageSquarePlus, UserPlus, Tag, Webhook } from "lucide-react";

export function AutomationsFeature() {
  return (
    <section 
      id="automations" 
      className="relative py-24 bg-slate-50"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1 text-[11px] font-medium text-blue-600 shadow-sm">
              <Zap className="h-3 w-3 text-blue-500" /> Automations
            </div>
            <h2 className="mt-5 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Automate the repetitive,<br />focus on the humans
            </h2>
            <p className="mt-5 text-base text-gray-600 max-w-lg">
              Build flows that react to WhatsApp events: welcome new contacts, chase
              unanswered replies, route leads by keyword. Conditions, waits, tags, deals —
              all with a visual builder that feels like Figma for workflows.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                { icon: MessageSquarePlus, text: "Triggers for new messages, contacts, tag changes, keywords, schedules." },
                { icon: Zap, text: "Actions: send template, add tag, create deal, webhook and more." },
                { icon: GitBranch, text: "Conditional branches and wait steps for human-time delays." },
                { icon: ScrollText, text: "Per-run logs so you always know what ran and why." },
              ].map((b, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-md bg-blue-50 text-blue-600 border border-blue-100">
                    <b.icon className="h-3.5 w-3.5" />
                  </span>
                  <span>{b.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative"
          >
            {/* Removed the blurry background layer since it was purely for dark mode */}
            <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-xl">
              <FlowBuilder />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FlowNode({
  icon: Icon,
  label,
  sub,
  tone = "default",
}: {
  icon: typeof Zap;
  label: string;
  sub: string;
  tone?: "default" | "trigger" | "wait" | "action";
}) {
  const tones = {
    default: "border-gray-200 bg-gray-50 text-gray-800",
    trigger: "border-[#25D366]/40 bg-[#25D366]/10 text-gray-900",
    wait: "border-yellow-400/40 bg-yellow-50 text-gray-900",
    action: "border-blue-300/50 bg-blue-50 text-gray-900",
  };
  return (
    <div className={`w-[220px] rounded-xl border ${tones[tone]} p-3 shadow-sm`}>
      <div className="flex items-center gap-2">
        <span className="grid h-6 w-6 place-items-center rounded-md bg-white border border-gray-200 shadow-sm">
          <Icon className="h-3.5 w-3.5 text-gray-600" />
        </span>
        <div className="text-xs font-semibold">{label}</div>
      </div>
      <p className="mt-1.5 text-[10px] text-gray-500 font-medium">{sub}</p>
    </div>
  );
}

function Connector() {
  return <div className="mx-auto my-1 h-6 w-px bg-gradient-to-b from-gray-300 to-gray-100" />;
}

function FlowBuilder() {
  return (
    <div className="flex flex-col items-center">
      <FlowNode icon={MessageSquarePlus} label="New WhatsApp message" sub="Trigger" tone="trigger" />
      <Connector />
      <FlowNode icon={GitBranch} label="Contains 'pricing'?" sub="Condition" />
      <div className="mt-1 grid grid-cols-2 gap-4">
        <div className="flex flex-col items-center">
          <div className="text-[10px] font-semibold text-[#25D366]">Yes</div>
          <Connector />
          <FlowNode icon={Tag} label="Add tag: Pricing" sub="Action" tone="action" />
          <Connector />
          <FlowNode icon={UserPlus} label="Create deal" sub="Sales pipeline" tone="action" />
        </div>
        <div className="flex flex-col items-center">
          <div className="text-[10px] font-semibold text-gray-400">No</div>
          <Connector />
          <FlowNode icon={Clock} label="Wait 15 min" sub="Human-time delay" tone="wait" />
          <Connector />
          <FlowNode icon={Webhook} label="Notify Slack" sub="Webhook" tone="action" />
        </div>
      </div>
    </div>
  );
}