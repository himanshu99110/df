'use client'
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Annual Platform Fee",
    price: "₹15,000",
    priceNote: "+ GST",
    billing: "One-Time Payment",
    whatsappRate: "₹0.90 Paisa / Message",
    freeMessages: "10 Messages on Signup",
    bestFor: "Businesses looking for a one-time platform setup",
    recommended: true,
  },
  {
    name: "Monthly Platform Fee",
    price: "₹3,500",
    priceNote: "+ GST / Month",
    billing: "Monthly Subscription",
    whatsappRate: "₹0.90 Paisa / Message",
    freeMessages: "10 Messages on Signup",
    bestFor: "Businesses looking for a low-cost monthly plan",
    recommended: false,
  },
];

const features = [
  "Bulk WhatsApp Messaging",
  "Campaign Management",
  "Message Scheduling",
  "Contact Management",
  "Delivery Tracking & Reports",
  "Message Templates",
  "Platform Support",
];


export function PricingSection() {
  return (
    <section id="pricing" className="relative pb-16">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-4xl">Simple & <span className="text-[#009e46]">Flexible</span> Pricing</h2>
          <p className="mt-4 text-base">Choose the platform plan that works best for your business. Get the same powerful WhatsApp messaging features with flexible payment options.</p>
        </motion.div>

        {/* <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative flex flex-col rounded-2xl ring p-8 shadow-xl ${
                plan.popular
                  ? "ring-[#25D366] bg-white ring-1 ring-[#25D366]/20"
                  : "ring-gray-200 bg-white"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#25D366] px-3 py-1 text-[11px] font-semibold text-white shadow-sm">
                  Most popular
                </span>
              )}

              <h3 className="text-lg font-semibold text-gray-900">{plan.name}</h3>
              <p className="mt-2 text-sm text-gray-600">{plan.description}</p>

              <div className="mt-5 flex items-baseline gap-1">
                <span className="text-4xl font-bold tracking-tight text-gray-900">{plan.price}</span>
                <span className="text-sm font-medium text-gray-500">/{plan.period}</span>
              </div>

              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-[#25D366]/10 text-[#25D366]">
                      <Check className="h-3 w-3" />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                asChild
                className={`mt-8 h-11 w-full rounded-full font-semibold ${
                  plan.popular
                    ? "bg-[#25D366] text-white hover:bg-[#1ebe5d] shadow-lg shadow-[#25D366]/20"
                    : "ring ring-gray-300 bg-white text-gray-700 hover:bg-gray-50"
                }`}
                variant={plan.popular ? "default" : "outline"}
              >
                <a href={plan.href}>{plan.cta}</a>
              </Button>
            </motion.div>
          ))}
        </div> */}
        <div className="grid gap-6 sm:grid-cols-2 lg:gap-8 mt-12">
          {plans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>
        <div className="mt-8 rounded-xl ring ring-slate-200 bg-white p-5 text-center shadow-sm sm:p-6">
          <p className="text-base font-semibold text-slate-900">
            WhatsApp Message Recharge
          </p>
          <p className="mt-1 text-base text-black">
            <span className="font-medium text-green-600">₹1 / Message</span> — Message
            credits are purchased separately from the platform fee. Once your free 10
            messages are used, contact our{" "}
            <span className="font-medium text-blue-600">Sales Team</span> to recharge.
          </p>

        </div>
        <p className="italic mt-4 text-center">Messaging charges are separate from the platform fee. Pricing may vary based on WhatsApp messaging requirements and applicable taxes.</p>
      </div>
    </section>
  );
}



function PricingCard({
  plan,
}: {
  plan: (typeof plans)[number];
}) {
  return (
    <div
      className={`relative flex flex-col rounded-2xl ring bg-white p-6 shadow-sm sm:p-8 ${plan.recommended
        ? "ring-blue-600 ring-2"
        : "ring-slate-200"
        }`}
    >
      {plan.recommended && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white shadow-sm">
          Recommended
        </span>
      )}

      <div className="mb-6">
        <h3 className="text-lg font-semibold text-slate-900">{plan.name}</h3>
        <p className="mt-1 text-sm text-slate-500">{plan.billing}</p>
      </div>

      <div className="mb-6">
        <span className="text-4xl font-bold tracking-tight text-slate-900">
          {plan.price}
        </span>
        <span className="text-base font-medium text-slate-500">
          {" "}
          {plan.priceNote}
        </span>
      </div>

      <div className="mb-6 space-y-3 rounded-xl bg-slate-50 p-4">
        <div className="flex items-center gap-2 text-sm text-slate-700">
          <div className="size-5 flex items-center justify-center">
            <svg
              width={512}
              height={512}
              x={0}
              y={0}
              viewBox="0 0 418.135 418.135"
              xmlSpace="preserve"
              className="s-full object-contain"
            >
              <g>
                <path
                  d="M198.929.242C88.5 5.5 1.356 97.466 1.691 208.02c.102 33.672 8.231 65.454 22.571 93.536L2.245 408.429c-1.191 5.781 4.023 10.843 9.766 9.483l104.723-24.811c26.905 13.402 57.125 21.143 89.108 21.631 112.869 1.724 206.982-87.897 210.5-200.724C420.113 93.065 320.295-5.538 198.929.242m124.957 321.955c-30.669 30.669-71.446 47.559-114.818 47.559-25.396 0-49.71-5.698-72.269-16.935l-14.584-7.265-64.206 15.212 13.515-65.607-7.185-14.07c-11.711-22.935-17.649-47.736-17.649-73.713 0-43.373 16.89-84.149 47.559-114.819 30.395-30.395 71.837-47.56 114.822-47.56 43.372.001 84.147 16.891 114.816 47.559 30.669 30.669 47.559 71.445 47.56 114.817-.001 42.986-17.166 84.428-47.561 114.822"
                  style={{}}
                  fill="#7ad06d"
                  data-original="#7ad06d"
                  className=""
                />
                <path
                  d="m309.712 252.351-40.169-11.534a14.97 14.97 0 0 0-14.816 3.903l-9.823 10.008c-4.142 4.22-10.427 5.576-15.909 3.358-19.002-7.69-58.974-43.23-69.182-61.007-2.945-5.128-2.458-11.539 1.158-16.218l8.576-11.095a14.97 14.97 0 0 0 1.847-15.21l-16.9-38.223c-4.048-9.155-15.747-11.82-23.39-5.356-11.211 9.482-24.513 23.891-26.13 39.854-2.851 28.144 9.219 63.622 54.862 106.222 52.73 49.215 94.956 55.717 122.449 49.057 15.594-3.777 28.056-18.919 35.921-31.317 5.362-8.453 1.128-19.679-8.494-22.442"
                  style={{}}
                  fill="#7ad06d"
                  data-original="#7ad06d"
                  className=""
                />
              </g>
            </svg>
          </div>
          <span>{plan.whatsappRate}</span>
        </div>
        <p className="text-sm text-slate-600">
          <span className="font-medium text-slate-900">Free Messages:</span>{" "}
          {plan.freeMessages}
        </p>
      </div>

      <ul className="mb-8 flex-1 space-y-3">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm text-slate-700">
            <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-500/10">
              <Check className="h-3.5 w-3.5 text-green-500" />
            </span>
            {feature}
          </li>
        ))}
      </ul>

      <div className="mt-auto">
        <p className="mb-4 text-sm leading-relaxed text-slate-700">
          <span className="font-medium text-slate-900">Best for:</span>{" "}
          {plan.bestFor}
        </p>
        <Link href='#contact' className={`w-full flex items-center justify-center rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 ${plan.recommended ? "bg-accent text-white" : "ring-2 text-black ring-blue-600 hover:text-white"}`}>
          Contact Sales Team
        </Link>
      </div>
    </div>
  );
}
