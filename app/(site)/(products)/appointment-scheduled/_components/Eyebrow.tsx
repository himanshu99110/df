 
export function Eyebrow({ children, center = false } : {children?: string, center?: boolean}) {
  return (
    <span
      className={`font-geist inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider mb-4 text-accent ${center ? 'justify-center' : ''}`}
    >
      {children}
    </span>
  );
}