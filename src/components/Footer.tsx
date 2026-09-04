import { NavLink, Link } from 'react-router-dom';
import { Lotus } from '@/components/ui/lotus-icon';

const FOOTER_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'Courses', path: '/courses' },
  { label: 'About us', path: '/about' },
];

export default function Footer() {
  return (
    <footer className="w-full bg-foreground text-background/90">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="flex flex-col items-start gap-4">
            <Link to="/" className="flex items-center gap-3">
              <Lotus className="w-10 h-10 text-primary-foreground" strokeWidth={1.2} />
              <div className="flex flex-col leading-tight">
                <span className="font-['Playfair_Display'] text-xl font-semibold tracking-widest">
                  LOTUS
                </span>
                <span className="font-['Playfair_Display'] text-xl font-semibold tracking-widest">
                  QIGONG
                </span>
              </div>
            </Link>
            <p className="text-sm text-background/60 leading-relaxed max-w-xs">
              Harmony and enlightenment through the ancient art of Lotus Moving QiGong.
              Practice with Master YoYun and transform your life.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-4">
            <h4 className="font-['Playfair_Display'] text-lg font-medium tracking-wide">
              Navigation
            </h4>
            <nav className="flex flex-col gap-2">
              {FOOTER_LINKS.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === '/'}
                  className={({ isActive }) =>
                    `text-sm transition-colors w-fit ${
                      isActive
                        ? 'text-primary-foreground'
                        : 'text-background/60 hover:text-primary-foreground'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h4 className="font-['Playfair_Display'] text-lg font-medium tracking-wide">
              Get in Touch
            </h4>
            <div className="flex flex-col gap-2 text-sm text-background/60">
              <p>taichi.yoyun@gmail.com</p>
              <p>Follow Master YoYun on your journey to harmony.</p>
            </div>
          </div>
        </div>

        {/* Divider with lotus */}
        <div className="flex items-center gap-4 my-10">
          <div className="flex-1 h-px bg-background/10" />
          <Lotus className="w-8 h-8 text-background/30" strokeWidth={1} />
          <div className="flex-1 h-px bg-background/10" />
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-background/50">
          <p>© {new Date().getFullYear()} Lotus Moving QiGong. All rights reserved.</p>
          <p className="italic">Immortality &amp; Enlightenment</p>
        </div>
      </div>
    </footer>
  );
}
