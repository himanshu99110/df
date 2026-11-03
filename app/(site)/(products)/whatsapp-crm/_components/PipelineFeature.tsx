'use client'
import { motion } from "framer-motion";
import { Kanban, MessageCircle, GripVertical } from "lucide-react";

const stages = [
  {
    name: "New",
    total: "$12,400",
    deals: [
      { title: "Acme Studio · Q3 upgrade", value: "$4,800", who: "Aisha P." },
      { title: "Marco Silva · Studio", value: "$1,200", who: "Marco S." },
    ],
  },
  {
    name: "Qualified",
    total: "$28,900",
    deals: [
      { title: "Northwind · Team plan", value: "$9,600", who: "Nora K." },
      { title: "Bright Labs · Studio", value: "$2,400", who: "Sam W." },
      { title: "Elena Ruiz · Studio+", value: "$3,600", who: "Elena R." },
    ],
  },
  {
    name: "Proposal",
    total: "$44,200",
    deals: [
      { title: "Ravel Group · Enterprise", value: "$24,000", who: "Priya M.", active: true },
      { title: "Kite Co · Team", value: "$4,200", who: "Jonas T." },
    ],
  },
  {
    name: "Won",
    total: "$61,800",
    deals: [
      { title: "Meridian · Enterprise", value: "$36,000", who: "Mira R." },
    ],
  },
];

export function PipelineFeature() {
  return (
    <section 
      id="pipelines" 
      className="relative py-24 bg-slate-50"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-4 shadow-xl">
              <div className="mb-3 flex items-center justify-between text-xs font-medium">
                <div className="flex items-center gap-2 text-gray-700">
                  <Kanban className="h-3.5 w-3.5 text-blue-500" /> Sales · Q3
                </div>
                <div className="text-gray-500">Total <span className="text-gray-900 font-bold">$147,300</span></div>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {stages.map(stage => (
                  <div key={stage.name} className="rounded-xl bg-gray-50 border border-gray-100 p-2">
                    <div className="flex items-center justify-between px-1 pb-2">
                      <span className="text-[10px] font-bold text-gray-800">{stage.name}</span>
                      <span className="text-[9px] font-medium text-gray-500">{stage.total}</span>
                    </div>
                    <div className="space-y-1.5">
                      {stage.deals.map((d, i) => (
                        <motion.div
                          key={i}
                          whileHover={{ y: -2 }}
                          className={`rounded-lg border p-2 text-[10px] shadow-sm ${
                            d.active ? "border-blue-300 bg-blue-50 text-blue-900" : "border-gray-200 bg-white text-gray-800"
                          }`}
                        >
                          <div className="flex items-start justify-between gap-1">
                            <span className="font-semibold leading-tight">{d.title}</span>
                            <GripVertical className="h-2.5 w-2.5 text-gray-400 shrink-0" />
                          </div>
                          <div className="mt-1.5 flex items-center justify-between text-gray-500">
                            <span className="font-medium">{d.value}</span>
                            <MessageCircle className={`h-2.5 w-2.5 ${d.active ? 'text-blue-500' : 'text-gray-400'}`} />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1 text-[11px] font-medium text-blue-600 shadow-sm">
              <Kanban className="h-3 w-3 text-blue-500" /> Sales pipelines
            </div>
            <h2 className="mt-5 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Turn conversations<br />into revenue
            </h2>
            <p className="mt-5 max-w-lg text-base text-gray-600">
              Drag deals through custom stages, link them to contacts, and see exactly
              where revenue is getting stuck. Every deal keeps its WhatsApp thread one
              click away — context never gets lost on a handoff.
            </p>
            <ul className="mt-8 space-y-3 text-sm font-medium text-gray-600">
              {[
                "Unlimited pipelines and stages.",
                "Kanban board with drag-and-drop.",
                "Deal value totals per stage and pipeline-wide.",
                "Linked contacts, conversations and notes per deal.",
              ].map((t, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}