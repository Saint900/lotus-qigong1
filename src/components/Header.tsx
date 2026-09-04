import { NavLink, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X, User, UserPlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Lotus } from '@/components/ui/lotus-icon';
import { useIsMobile } from '@/hooks/use-mobile';

const NAV_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'Courses', path: '/courses' },
  { label: 'About us', path: '/about' },
];

export default function Header() {
  const isMobile = useIsMobile();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-background/90 backdrop-blur-md shadow-sm'
          : 'bg-background/70 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex h-16 md:h-20 items-center justify-between">
        {/* Left nav - desktop */}
        <nav className="hidden md:flex items-center gap-8 flex-1">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                `text-sm tracking-wide transition-colors ${
                  isActive
                    ? 'text-primary font-medium'
                    : 'text-foreground/80 hover:text-primary'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Center Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 shrink-0"
          aria-label="Lotus QiGong home"
        >
          <div className="relative">
            <Lotus className="w-10 h-10 md:w-12 md:h-12 text-primary" />
          </div>
          <div className="hidden sm:flex flex-col leading-none">
            <span className="font-['Playfair_Display'] text-lg md:text-xl font-semibold text-primary tracking-widest">
              LOTUS
            </span>
            <span className="font-['Playfair_Display'] text-lg md:text-xl font-semibold text-primary tracking-widest">
              QIGONG
            </span>
          </div>
        </Link>

        {/* Right - desktop */}
        <div className="hidden md:flex items-center gap-3 flex-1 justify-end">
          <Button variant="ghost" size="sm" className="text-foreground/70 hover:text-primary">
            <User className="w-4 h-4 mr-1.5" />
            Sign in
          </Button>
          <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            <UserPlus className="w-4 h-4 mr-1.5" />
            Sign up
          </Button>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile nav */}
      {isMobile && mobileOpen && (
        <div className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur-md">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `px-3 py-3 rounded-md transition-colors ${
                    isActive
                      ? 'bg-primary/10 text-primary font-medium'
                      : 'text-foreground/80 hover:bg-muted hover:text-primary'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <div className="flex gap-2 pt-3 mt-2 border-t border-border/40">
              <Button variant="ghost" size="sm" className="flex-1 justify-center">
                <User className="w-4 h-4 mr-1.5" />
                Sign in
              </Button>
              <Button variant="outline" size="sm" className="flex-1 justify-center border-primary text-primary">
                <UserPlus className="w-4 h-4 mr-1.5" />
                Sign up
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
