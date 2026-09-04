import { cn } from '@/lib/utils';

interface LotusProps {
  className?: string;
  strokeWidth?: number;
}

/**
 * Decorative lotus flower icon for branding & divider use.
 * Hand-crafted SVG — matches the zen / chinese aesthetic of the site.
 */
export function Lotus({ className, strokeWidth = 1.5 }: LotusProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('stroke-current', className)}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Center bud */}
      <ellipse cx="32" cy="34" rx="4" ry="6" className="fill-current/10" />
      {/* Inner petals — 6 petals */}
      <path d="M32 28 C28 26, 24 28, 22 34 C24 38, 28 40, 32 38" className="fill-current/10" />
      <path d="M32 28 C36 26, 40 28, 42 34 C40 38, 36 40, 32 38" className="fill-current/10" />
      <path d="M32 26 C30 22, 26 22, 24 28 C23 32, 27 36, 32 34" className="fill-current/10" />
      <path d="M32 26 C34 22, 38 22, 40 28 C41 32, 37 36, 32 34" className="fill-current/10" />
      <path d="M32 30 C27 28, 22 32, 20 38 C24 42, 29 42, 32 40" className="fill-current/10" />
      <path d="M32 30 C37 28, 42 32, 44 38 C40 42, 35 42, 32 40" className="fill-current/10" />
      {/* Outer large petals — 8 petals */}
      <path d="M32 24 C28 16, 20 18, 18 28 C18 36, 26 40, 32 36" className="fill-current/5" />
      <path d="M32 24 C36 16, 44 18, 46 28 C46 36, 38 40, 32 36" className="fill-current/5" />
      <path d="M32 30 C22 24, 14 30, 14 40 C20 46, 28 44, 32 40" className="fill-current/5" />
      <path d="M32 30 C42 24, 50 30, 50 40 C44 46, 36 44, 32 40" className="fill-current/5" />
      <path d="M32 36 C26 36, 18 40, 18 48 C24 52, 30 50, 32 46" className="fill-current/5" />
      <path d="M32 36 C38 36, 46 40, 46 48 C40 52, 34 50, 32 46" className="fill-current/5" />
      {/* Bottom leaves */}
      <path d="M20 50 C24 48, 28 50, 32 48 C36 50, 40 48, 44 50" />
      {/* Decorative circular frame (like the logo) */}
      <circle cx="32" cy="36" r="30" className="fill-none opacity-60" />
    </svg>
  );
}
