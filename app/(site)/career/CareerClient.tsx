"use client"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { motion } from "framer-motion"
import {
  ArrowUpRight,
  BadgeCheck,
  Briefcase,
  Check,
  Clock,
  Dot,
  Globe,
  Heart,
  Laptop,
  Loader2,
  MapPin,
  Rocket,
  Sparkle,
  TrendingUp,
  Upload,
  Users,
  Zap,
} from "lucide-react"
import Image from "next/image"
import { useRef, useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"
import ReCAPTCHA from "react-google-recaptcha"

const MAX_FILE_SIZE = 10 * 1024 * 1024 // 10MB
const ACCEPTED_FILE_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]

const applicationSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  cover: z
    .string()
    .min(10, "Cover letter must be at least 10 characters")
    .max(500, "Maximum 500 characters allowed"),
  website: z.string().optional(), // Honeypot
  resume: z
    .any()
    .refine((files) => files?.length === 1, "CV is required.")
    .refine(
      (files) => files?.[0]?.size <= MAX_FILE_SIZE,
      "Max file size is 10MB."
    )
    .refine(
      (files) => ACCEPTED_FILE_TYPES.includes(files?.[0]?.type),
      "Only .pdf, .doc, and .docx formats are supported."
    ),
})

type ApplicationFormValues = z.infer<typeof applicationSchema>

const values = [
  {
    icon: Rocket,
    title: "Move Fast",
    desc: "Ship, learn, iterate. We value momentum over perfection.",
  },
  {
    icon: Users,
    title: "Own It",
    desc: "Every project is a chance to lead, decide, and deliver.",
  },
  {
    icon: Zap,
    title: "Think Bold",
    desc: "We question the obvious and chase what others hesitate to try.",
  },
  {
    icon: Globe,
    title: "Stay Curious",
    desc: "Trends change daily. We learn continuously and share openly.",
  },
  {
    icon: Heart,
    title: "Care Deeply",
    desc: "About clients, craft, and each other. Great work starts with empathy.",
  },
  {
    icon: Laptop,
    title: "Work Anywhere",
    desc: "Flexible schedules and remote-first culture built on trust.",
  },
]

type Job = {
  id: string
  title: string
  team: string
  experience: string
  location: string
  type: string
  short: string
  overview: string
  responsibilities: string[]
  requirements: string[]
  perks: string[]
}

const JOBS: Job[] = [
  {
    id: "web-developer",
    title: "Web Developer",
    team: "Development",
    experience: "2+ years",
    location: "Delhi",
    type: "Full-time",
    short:
      "Build responsive, high-performance websites and web applications for diverse client projects.",
    overview:
      "We're looking for a passionate Web Developer who enjoys creating modern digital experiences. You'll collaborate with designers, marketers, and developers to deliver websites that are visually appealing, fast, and user-friendly.",
    responsibilities: [
      "Develop responsive websites using modern frontend technologies",
      "Collaborate with designers to implement pixel-perfect interfaces",
      "Optimize website performance, accessibility, and SEO fundamentals",
      "Maintain and enhance existing client websites",
    ],
    requirements: [
      "2+ years of web development experience",
      "Strong knowledge of HTML, CSS, JavaScript, and responsive design",
      "Experience with modern frameworks and CMS platforms",
      "Understanding of website performance and best practices",
    ],
    perks: [
      "Professional growth opportunities",
      "Collaborative team environment",
      "Exposure to diverse industry projects",
    ],
  },

  {
    id: "full-stack-web-developer",
    title: "Full Stack Web Developer",
    team: "Development",
    experience: "3–5 years",
    location: "Delhi",
    type: "Full-time",
    short:
      "Develop scalable web applications across frontend and backend technologies.",
    overview:
      "Join our development team to build complete digital solutions from concept to deployment. You'll work on both client-facing interfaces and server-side systems.",
    responsibilities: [
      "Develop and maintain frontend and backend applications",
      "Design and integrate APIs and databases",
      "Ensure application performance, security, and scalability",
      "Collaborate with cross-functional teams throughout project lifecycles",
    ],
    requirements: [
      "3+ years of full-stack development experience",
      "Knowledge of modern frontend and backend frameworks",
      "Experience with relational databases",
      "Understanding of deployment and version control workflows",
    ],
    perks: [
      "Work on end-to-end projects",
      "Career advancement opportunities",
      "Supportive and innovative environment",
    ],
  },

  {
    id: "senior-ui-ux-designer",
    title: "Senior UI/UX Designer",
    team: "Design",
    experience: "4+ years",
    location: "Delhi",
    type: "Full-time",
    short:
      "Create intuitive user experiences and visually engaging digital products.",
    overview:
      "We're seeking a creative designer who can transform business requirements into exceptional user experiences. You'll contribute to research, wireframing, prototyping, and interface design.",
    responsibilities: [
      "Design user-centric interfaces and experiences",
      "Create wireframes, prototypes, and design systems",
      "Conduct UX research and usability evaluations",
      "Collaborate closely with developers and stakeholders",
    ],
    requirements: [
      "4+ years of UI/UX design experience",
      "Strong portfolio showcasing digital product design",
      "Proficiency in Figma or similar design tools",
      "Understanding of user-centered design principles",
    ],
    perks: [
      "Creative ownership of projects",
      "Latest design tools and resources",
      "Continuous learning opportunities",
    ],
  },

  {
    id: "digital-marketing-executive",
    title: "Digital Marketing Executive",
    team: "Marketing",
    experience: "2–4 years",
    location: "Delhi",
    type: "Full-time",
    short:
      "Drive online visibility, engagement, and lead generation through digital channels.",
    overview:
      "As a Digital Marketing Executive, you'll help plan and execute campaigns that increase brand awareness and generate measurable business results.",
    responsibilities: [
      "Plan and manage digital marketing campaigns",
      "Monitor campaign performance and optimize results",
      "Manage social media and content distribution channels",
      "Collaborate with design and content teams",
    ],
    requirements: [
      "Experience in digital marketing campaigns",
      "Knowledge of social media, paid ads, and analytics tools",
      "Strong communication and reporting skills",
      "Data-driven mindset with attention to detail",
    ],
    perks: [
      "Exposure to multiple industries",
      "Performance-based growth opportunities",
      "Dynamic work environment",
    ],
  },

  {
    id: "senior-seo-specialist",
    title: "Senior SEO Specialist (AI Expertise)",
    team: "Marketing",
    experience: "3–5 years",
    location: "Delhi",
    type: "Full-time",
    short:
      "Lead SEO initiatives using modern optimization techniques and AI-powered workflows.",
    overview:
      "We're looking for an SEO professional who can combine traditional SEO expertise with emerging AI tools to improve search visibility and organic growth.",
    responsibilities: [
      "Develop and execute SEO strategies",
      "Perform keyword research and competitor analysis",
      "Optimize website content and technical SEO elements",
      "Leverage AI tools to improve efficiency and insights",
    ],
    requirements: [
      "3+ years of SEO experience",
      "Strong understanding of on-page and technical SEO",
      "Experience with SEO and analytics platforms",
      "Familiarity with AI-assisted content and research tools",
    ],
    perks: [
      "Work with cutting-edge marketing technologies",
      "Professional certification support",
      "Growth-focused environment",
    ],
  },

  {
    id: "client-servicing-executive",
    title: "Client Servicing Executive",
    team: "Client Relations",
    experience: "2–5 years",
    location: "Delhi",
    type: "Full-time",
    short:
      "Build strong client relationships and ensure successful project delivery.",
    overview:
      "You'll act as the bridge between clients and internal teams, ensuring smooth communication, timely execution, and exceptional service experiences.",
    responsibilities: [
      "Manage day-to-day client communication",
      "Coordinate with internal teams for project execution",
      "Track project timelines and deliverables",
      "Identify opportunities for client growth and retention",
    ],
    requirements: [
      "Excellent communication and interpersonal skills",
      "Experience in client-facing roles",
      "Strong organizational and multitasking abilities",
      "Problem-solving mindset",
    ],
    perks: [
      "Direct client interaction",
      "Fast-paced professional environment",
      "Career growth opportunities",
    ],
  },

  {
    id: "business-development-manager",
    title: "Business Development Manager",
    team: "Business Development",
    experience: "3–6 years",
    location: "Delhi",
    type: "Full-time",
    short:
      "Drive business growth through lead generation, partnerships, and client acquisition.",
    overview:
      "We're seeking a results-oriented professional to identify opportunities, build relationships, and contribute to the company's growth objectives.",
    responsibilities: [
      "Generate and qualify new business opportunities",
      "Build relationships with potential clients and partners",
      "Prepare proposals and participate in sales discussions",
      "Achieve business development targets and KPIs",
    ],
    requirements: [
      "Experience in sales or business development",
      "Strong negotiation and presentation skills",
      "Ability to build long-term client relationships",
      "Target-driven and proactive approach",
    ],
    perks: [
      "Performance incentives",
      "Leadership opportunities",
      "Exposure to strategic business initiatives",
    ],
  },

  {
    id: "graphic-designer",
    title: "Graphic Designer",
    team: "Design",
    experience: "3–5 years",
    location: "Delhi",
    type: "Full-time",
    short:
      "Create compelling visual content across digital, branding, and marketing campaigns.",
    overview:
      "Join our creative team to design engaging visual assets that strengthen brand identity and communicate ideas effectively.",
    responsibilities: [
      "Design marketing, social media, and branding materials",
      "Maintain visual consistency across projects",
      "Collaborate with marketing and content teams",
      "Prepare production-ready creative assets",
    ],
    requirements: [
      "Strong portfolio of graphic design work",
      "Proficiency in Adobe Creative Suite or equivalent tools",
      "Understanding of branding and visual communication",
      "Attention to detail and creativity",
    ],
    perks: [
      "Creative work environment",
      "Opportunity to work on diverse brands",
      "Skill development programs",
    ],
  },

  {
    id: "video-editor",
    title: "Video Editor",
    team: "Creative",
    experience: "2–4 years",
    location: "Delhi",
    type: "Full-time",
    short:
      "Produce engaging video content for digital marketing, branding, and social media campaigns.",
    overview:
      "We're looking for a skilled Video Editor who can transform raw footage into compelling stories that capture attention and drive engagement.",
    responsibilities: [
      "Edit videos for social media, marketing, and brand campaigns",
      "Add motion graphics, transitions, and visual effects",
      "Collaborate with creative and marketing teams",
      "Ensure content meets brand guidelines and deadlines",
    ],
    requirements: [
      "Experience with professional video editing software",
      "Strong storytelling and visual composition skills",
      "Knowledge of current content and social media trends",
      "Ability to manage multiple projects simultaneously",
    ],
    perks: [
      "Creative freedom on projects",
      "Access to professional tools and resources",
      "Growth-oriented team culture",
    ],
  },
]

export default function Career() {
  const [selected, setSelected] = useState<Job | null>(null)

  return (
    <>
      <div className="bg-[url('/images/bg4.avif')] bg-cover bg-no-repeat py-12">
        <div className="container">
          <motion.div
            className="grid grid-cols-1 gap-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
          >
            <div className="flex h-full flex-col items-center justify-center gap-4 text-center md:gap-6">
              <motion.span
                className="flex items-center gap-2 rounded-full px-2 py-1.5 text-[13px] text-white ring-1 ring-[#fff3]"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: "easeOut" },
                  },
                }}
              >
                <Sparkle
                  size={18}
                  className="fill-orange-600 stroke-orange-600"
                />
                Life at Digital Fueled
              </motion.span>

              <motion.h1
                className="font-geist text-4xl font-semibold text-white capitalize md:text-5xl lg:text-[3.5rem] lg:leading-none"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: "easeOut" },
                  },
                }}
              >
                Career
              </motion.h1>

              <motion.p
                className="max-w-5xl font-medium text-white md:text-lg"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: "easeOut" },
                  },
                }}
              >
                We are a tight-knit team of designers, developers, and marketers
                building products and brands that matter. If you love craft,
                speed, and impact — you will fit right in.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>

      <section className="pt-16 pb-14 lg:pt-24 lg:pb-20">
        <div className="container">
          <div className="grid gap-16 lg:grid-cols-[2fr_1.5fr]">
            <div className="order-2 mt-6 lg:order-1">
              <span className="mb-6 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium text-accent ring ring-accent/20">
                <TrendingUp className="h-3 w-3" /> Life at Digital Fueled
              </span>
              <h2 className="mb-4 font-geist text-[28px] leading-[1.2] font-semibold tracking-tight text-gray-900 md:mb-6 md:text-[40px] md:leading-none lg:text-5xl lg:leading-none">
                Build the future with <br />
                DigitalFueled
              </h2>
              <p className="mb-4 font-geist">
                From product sprints to Friday demos, every day is a mix of deep
                work and creative collaboration. No politics, no ego — just
                craft, curiosity, and shipping things we're proud of.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Remote-first with quarterly team meetups",
                  "Real ownership from day one",
                  "Direct mentorship from senior leaders",
                  "Work on brands you actually recognize",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-orange-500" />
                    <span className="text-slate-900">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative order-1 mx-auto h-[300px] w-full max-w-[320px] sm:h-[400px] sm:max-w-[420px] md:h-[450px] md:max-w-[520px] lg:order-2">
              {/* Large Image */}
              <div className="absolute top-0 right-0 h-full w-[95%] lg:w-[85%]">
                <Image
                  src="/images/demo/work-2.avif"
                  alt="coding image"
                  width={600}
                  height={800}
                  className="h-full w-full rounded-2xl object-cover shadow-lg"
                />
              </div>

              <div className="absolute right-2 -bottom-8 z-20 sm:right-6 sm:-bottom-12 md:right-8 md:-bottom-16">
                <svg
                  viewBox="0 0 200 200"
                  className="h-28 w-28 animate-[spin_15s_linear_infinite] rounded-full bg-white sm:h-36 sm:w-36 md:h-[184px] md:w-[184px]"
                >
                  <circle
                    cx="100"
                    cy="100"
                    r="88"
                    fill="none"
                    stroke="#f97316"
                    strokeWidth="1.5"
                  />

                  {/* Inner Circle */}
                  <circle
                    cx="100"
                    cy="100"
                    r="52"
                    fill="none"
                    stroke="#f97316"
                    strokeWidth="1.5"
                  />

                  <defs>
                    <path
                      id="circleText"
                      d="
M100,100
m-72,0
a72,72 0 1,1 144,0
a72,72 0 1,1 -144,0
"
                    />
                  </defs>

                  <text
                    fill="#f97316"
                    fontSize="11"
                    letterSpacing="3.5"
                    fontWeight="600"
                  >
                    <textPath href="#circleText" className="uppercase">
                      DigitalFueled • DigitalFueled • DigitalFueled •
                    </textPath>
                  </text>
                </svg>

                <div className="absolute inset-0 flex items-center justify-center text-2xl text-orange-500 sm:text-3xl md:text-4xl">
                  <ArrowUpRight />
                </div>
              </div>

              {/* Small Image */}
              <div className="absolute -bottom-6 left-0 z-10 w-[45%] rounded-2xl ring-4 ring-gray-200 sm:-bottom-8 sm:w-[50%] md:-bottom-10 md:w-[46%]">
                <Image
                  src="/images/demo/work.avif"
                  alt="coding image"
                  width={400}
                  height={400}
                  className="aspect-square w-full rounded-2xl object-cover shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 lg:py-20">
        <div className="container">
          <div className="text-center">
            <h2 className="mb-8 font-geist text-[28px] leading-[1.2] font-semibold tracking-tight text-gray-900 md:mb-12 md:text-[40px] md:leading-none lg:text-5xl lg:leading-none">
              How we work
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => {
              const Icon = v.icon
              return (
                <div
                  key={v.title}
                  className="group relative overflow-hidden rounded-2xl p-6 shadow-md ring ring-gray-300 transition-all hover:-translate-y-1 hover:shadow-[0_20px_60px_-20px_oklch(0.67_0.22_25.5/0.25)] hover:ring-orange-500"
                >
                  <div className="absolute -top-8 -right-8 h-24 w-24 rounded-full bg-orange-300 opacity-0 blur-2xl transition-opacity group-hover:opacity-30" />
                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <span className="shadow-soft flex h-11 w-11 items-center justify-center rounded-lg bg-orange-100 text-orange-500">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="font-gra text-xs text-muted-foreground">
                        0{i + 1}
                      </span>
                    </div>
                    <h3 className="mt-5 text-xl font-semibold">{v.title}</h3>
                    <p className="mt-1">{v.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-10 lg:py-20">
        <div className="container">
          <div className="mb-8 text-center lg:mb-12">
            <h2 className="mb-4 font-geist text-[28px] leading-[1.2] font-semibold tracking-tight text-gray-900 md:mb-6 md:text-[40px] md:leading-none lg:text-5xl lg:leading-none">
              Roles we're hiring for
            </h2>
            <p className="mx-auto max-w-prose md:text-lg">
              Be part of a collaborative team that values innovation,
              creativity, and growth. Explore opportunities to build meaningful
              digital experiences and advance your career.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {JOBS.map((job) => (
              <JobCard key={job.id} job={job} onOpen={() => setSelected(job)} />
            ))}
          </div>
        </div>
      </section>
      {/* <section id="career" className="py-20 bg-gray-100 scroll-mt-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-6 font-geist text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
              Join the{' '}
              <span className="animate-gradient bg-linear-to-tl from-[#29b2f6] via-[#1f5eff] to-[#c2c4ff] bg-size-[200%_auto] bg-clip-text text-transparent">
                DigitalFueled
              </span>
              {' '}Team
            </h2>
            <p className="text-lg max-w-prose mx-auto">
              Be part of a collaborative team that values innovation, creativity, and growth. Explore opportunities to build meaningful digital experiences and advance your career.
            </p>
          </div>
          <ApplicationForm />
        </div>
      </section> */}
      <JobDialog job={selected} onClose={() => setSelected(null)} />
    </>
  )
}

function JobCard({ job, onOpen }: { job: Job; onOpen: () => void }) {
  return (
    <article className="group relative flex flex-col rounded-xl bg-card p-6 ring ring-border transition hover:shadow-[0_14px_30px_-14px_oklch(0.7_0.16_251.77/0.25)] hover:ring-blue-300">
      <h3 className="text-xl font-semibold md:text-xl">{job.title}</h3>

      <p className="text-ink/70 mt-3 text-[15px] leading-relaxed">
        {job.short}
      </p>

      <div className="text-ink/70 mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm">
        <span className="inline-flex items-center gap-1.5">
          <Briefcase className="h-4 w-4" /> {job.experience}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <MapPin className="h-4 w-4" /> {job.location}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Clock className="h-4 w-4" /> {job.type}
        </span>
      </div>

      <div className="mt-8 flex items-center justify-between">
        <button
          onClick={onOpen}
          className="group/btn inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white transition hover:bg-accent/90"
        >
          Apply now
          <ArrowUpRight className="h-4 w-4 transition group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
        </button>
        <button
          onClick={onOpen}
          className="text-sm text-accent/60 underline underline-offset-4 hover:text-accent"
        >
          View details
        </button>
      </div>
    </article>
  )
}

function JobDialog({ job, onClose }: { job: Job | null; onClose: () => void }) {
  return (
    <Dialog open={!!job} onOpenChange={(o) => !o && onClose()}>
      <DialogContent
        className="h-[90vh] max-w-none overflow-hidden rounded-none border-0 bg-white sm:max-w-7xl lg:rounded-lg lg:pr-0"
        onInteractOutside={(e) => {
          // Prevent the dialog from closing when clicking the reCAPTCHA popup
          const target = e.target as Element
          if (target.closest('div[style*="z-index: 2000000000"]')) {
            e.preventDefault()
          }
        }}
      >
        {job && (
          <>
            <DialogHeader className="p-0">
              <DialogTitle className="sr-only">{job.title}</DialogTitle>
              <DialogDescription className="sr-only">
                {job.short}
              </DialogDescription>
            </DialogHeader>

            <div className="scrollbar-thin mx-auto grid h-full w-full gap-8 overflow-y-auto sm:p-6 lg:grid-cols-[1.4fr_1fr] lg:gap-16 lg:p-8">
              <div className="h-full min-w-0">
                <h2 className="text-2xl font-medium sm:text-3xl md:text-4xl">
                  {job.title}
                </h2>

                <p className="mt-3 max-w-2xl text-sm text-gray-600 sm:text-base">
                  {job.overview}
                </p>

                {/* Meta information row */}
                <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-gray-500 sm:text-base">
                  <span>{job.experience} of experience</span>
                  <Dot className="hidden shrink-0 sm:block" />
                  <span>{job.location}</span>
                  <Dot className="hidden shrink-0 sm:block" />
                  <span>{job.type}</span>
                </div>

                <div className="mt-8 space-y-8">
                  <Section
                    title="What you'll do"
                    items={job.responsibilities}
                  />
                  <Section
                    title="What we're looking for"
                    items={job.requirements}
                  />
                  <Section title="Perks & benefits" items={job.perks} />
                </div>
              </div>

              {/* Application form */}
              <div className="pb-8 lg:pb-0">
                <ApplicationForm jobTitle={job.title} onSubmitted={onClose} />
              </div>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}

function Section({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="mt-6">
      <h3 className="text-lg font-medium tracking-tight md:text-lg">{title}</h3>
      <ul className="mt-4 space-y-2">
        {items.map((item) => (
          <li
            key={item}
            className="text-ink/80 flex gap-3 text-sm leading-relaxed"
          >
            <Check className="mt-1 h-4 w-4 shrink-0 text-orange-500" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function ApplicationForm({
  jobTitle,
  onSubmitted,
}: {
  jobTitle: string
  onSubmitted: () => void
}) {
  const [fileName, setFileName] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState(false)
  const recaptchaRef = useRef<ReCAPTCHA>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ApplicationFormValues>({
    resolver: zodResolver(applicationSchema),
  })

  const {
    onChange: resumeOnChange,
    onBlur: resumeOnBlur,
    name: resumeName,
    ref: resumeRef,
  } = register("resume")

  const onSubmit = async (data: ApplicationFormValues) => {
    setSubmitting(true)

    const token = recaptchaRef.current?.getValue()
    if (!token) {
      toast.error("Please complete the reCAPTCHA challenge.")
      setSubmitting(false)
      return
    }

    try {
      const formData = new FormData()
      formData.append("name", data.name)
      formData.append("email", data.email)
      formData.append("phone", data.phone)
      formData.append("cover", data.cover)
      formData.append("role", jobTitle)
      formData.append("website", data.website || "")

      // ✅ Append the recaptcha token directly to the FormData
      formData.append("recaptchaToken", token)

      // Append the actual file
      if (data.resume && data.resume.length > 0) {
        formData.append("resume", data.resume[0])
      }

      if (typeof window !== "undefined") {
        try {
          const storedUtm = localStorage.getItem("digitalFueledSource")
          if (storedUtm) {
            const parsedUtmData = JSON.parse(storedUtm)
            formData.append("utm_source", parsedUtmData.utm_source || "Direct")
            formData.append("utm_medium", parsedUtmData.utm_medium || "")
            formData.append("utm_campaign", parsedUtmData.utm_campaign || "")
          }
        } catch (e) {
          console.error("Failed to parse UTM data")
        }
      }

      const response = await fetch("https://app.digitalfueled.com/api/career", {
        method: "POST",
        // ✅ Send the formData object directly. The browser will automatically
        // set the correct 'multipart/form-data' headers and boundary.
        body: formData,
      })

      const result = await response.json()

      if (response.ok && result.success) {
        toast.success("Application submitted successfully!")
        onSubmitted()
      } else {
        toast.error(
          result.error || "Failed to submit application. Please try again."
        )
        recaptchaRef.current?.reset()
      }
    } catch (error) {
      console.error("Submission error:", error)
      toast.error("An unexpected error occurred. Please try again later.")
      recaptchaRef.current?.reset()
    } finally {
      setSubmitting(false)
      // Note: You might not want to reset it here if the submission succeeded,
      // but if 'onSubmitted' unmounts the form, it's fine.
      recaptchaRef.current?.reset()
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="relative overflow-hidden rounded-xl bg-blue-100 p-4 ring ring-gray-200 md:p-6"
    >
      <div className="text-base font-semibold text-gray-900">
        Applying for {jobTitle}
      </div>
      <div className="mt-4 h-px w-full bg-blue-200" />

      {/* Anti-bot honeypot field (hidden from users) */}
      <input
        type="text"
        {...register("website")}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="mt-6 grid gap-4">
        <Field label="Full name" htmlFor="name" error={errors.name?.message}>
          <input
            id="name"
            {...register("name")}
            maxLength={100}
            placeholder="Enter Your Name"
            className={`w-full rounded-lg border bg-white px-5 py-3 text-[14px] text-[#334155] placeholder-[#94A3B8] transition-all focus:ring-2 focus:outline-none ${errors.name ? "border-red-500 focus:border-red-500 focus:ring-red-100" : "border-transparent focus:border-blue-200 focus:ring-blue-100"}`}
          />
        </Field>

        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Email" htmlFor="email" error={errors.email?.message}>
            <input
              id="email"
              type="email"
              {...register("email")}
              maxLength={255}
              placeholder="Enter Your Email"
              className={`w-full rounded-lg border bg-white px-5 py-3 text-[14px] text-[#334155] placeholder-[#94A3B8] transition-all focus:ring-2 focus:outline-none ${errors.email ? "border-red-500 focus:border-red-500 focus:ring-red-100" : "border-transparent focus:border-blue-200 focus:ring-blue-100"}`}
            />
          </Field>
          <Field label="Phone" htmlFor="phone" error={errors.phone?.message}>
            <input
              id="phone"
              type="tel"
              {...register("phone")}
              maxLength={30}
              placeholder="Enter Your Phone"
              className={`w-full rounded-lg border bg-white px-5 py-3 text-[14px] text-[#334155] placeholder-[#94A3B8] transition-all focus:ring-2 focus:outline-none ${errors.phone ? "border-red-500 focus:border-red-500 focus:ring-red-100" : "border-transparent focus:border-blue-200 focus:ring-blue-100"}`}
            />
          </Field>
        </div>

        <Field
          label="Cover letter"
          htmlFor="cover"
          error={errors.cover?.message}
        >
          <textarea
            id="cover"
            {...register("cover")}
            maxLength={500}
            rows={3}
            placeholder="Why do you want to join us? What makes you a great fit?"
            className={`w-full resize-none rounded-lg border bg-white px-5 py-4 text-[14px] text-[#334155] placeholder-[#94A3B8] transition-all focus:ring-2 focus:outline-none ${errors.cover ? "border-red-500 focus:border-red-500 focus:ring-red-100" : "border-transparent focus:border-blue-200 focus:ring-blue-100"}`}
          />
        </Field>

        <Field
          label="Upload Resume"
          htmlFor="resume"
          error={errors.resume?.message as string}
        >
          <label
            htmlFor="resume"
            className={`flex cursor-pointer items-center justify-between gap-3 rounded-md border-2 border-dashed bg-white px-4 py-3 text-sm transition hover:bg-gray-50 ${errors.resume ? "border-red-500" : "border-gray-300"}`}
          >
            <span className="flex items-center gap-2 lg:truncate">
              <Upload
                className={`size-4 shrink-0 ${errors.resume ? "text-red-500" : "text-gray-400"}`}
              />
              <span
                className={`text-xs lg:truncate ${fileName ? "font-medium text-gray-900" : "text-gray-500"}`}
              >
                {fileName ?? "PDF, DOC or DOCX — up to 10MB"}
              </span>
            </span>
            <span className="shrink-0 rounded-full bg-blue-100 px-3 py-2 text-xs font-medium text-blue-700">
              Choose file
            </span>
          </label>
          <input
            id="resume"
            type="file"
            accept=".pdf,.doc,.docx"
            className="hidden"
            name={resumeName}
            ref={resumeRef}
            onBlur={resumeOnBlur}
            onChange={(e) => {
              resumeOnChange(e) // Send event to react-hook-form
              setFileName(e.target.files?.[0]?.name ?? null) // Update local state for UI
            }}
          />
        </Field>
        <div className="flex py-2">
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string}
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-accent py-4 text-[15px] font-medium text-white shadow-sm transition-all duration-200 hover:bg-[#1E293B] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {submitting ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" /> Submitting...
          </>
        ) : (
          "Submit application"
        )}
      </button>
    </form>
  )
}

function Field({
  label,
  htmlFor,
  children,
  error,
}: {
  label: string
  htmlFor: string
  children: React.ReactNode
  error?: string
}) {
  return (
    <div className="grid gap-2">
      <label
        htmlFor={htmlFor}
        className="block text-[13px] font-semibold text-[#1E293B]"
      >
        {label}
      </label>
      {children}
      {error && <span className="text-[11px] text-red-500">{error}</span>}
    </div>
  )
}
