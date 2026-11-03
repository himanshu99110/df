import { ArrowRight } from "lucide-react"

interface ThemeButtonProps {
  text?: string
  href?: string
}

export const ThemeButton = ({
  text = "Explore",
  href = "#",
}: ThemeButtonProps) => {
  return (
    <div className="header-btn">
      <a
        href={href}
        // 'group' is added here to control the hover states of child spans
        className="group relative z-10 inline-block overflow-hidden rounded-lg bg-secondary border-2 border-secondary py-[17px] pr-[46px] pl-[24px] text-lg leading-none font-semibold text-white capitalize transition-all duration-[400ms] ease-in-out hover:text-[var(--primary-color)]"
      >
        {/* Background Sweep Effect (replaces ::after) */}
        <span className="absolute top-0 left-0 -z-10 h-full w-0 bg-white rounded-lg transition-all duration-[400ms] ease-in-out group-hover:w-full"></span>

        {/* Button Text */}
        <span className="relative z-10">{text}</span>

        {/* Icon (replaces ::before) */}
        <span className="absolute top-1/2 right-5 -translate-y-1/2 -rotate-45 transition-all duration-300 ease-in-out group-hover:rotate-0">
          <ArrowRight size={20} strokeWidth={2.5} className="text-current" />
        </span>
      </a>
    </div>
  )
}

export default ThemeButton
