import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { MOCK_HERO } from '@/data/home-page';
import { Lotus } from '@/components/ui/lotus-icon';

export default function HeroSection() {
  const navigate = useNavigate();
  const hero = MOCK_HERO;

  return (
    <section className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${hero.bgImageUrl})` }}
        />
        {/* Overlay gradient for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/30 via-foreground/20 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/40 via-transparent to-foreground/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6 py-24 md:py-32 text-center text-background">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-4"
        >
          {/* Decorative lotus */}
          <Lotus className="w-12 h-12 md:w-16 md:h-16 text-background/70" strokeWidth={1} />

          {/* Tagline */}
          <p className="text-sm md:text-base tracking-[0.3em] uppercase text-background/80 font-light">
            {hero.tagline}
          </p>

          {/* Main title */}
          <h1 className="font-['Playfair_Display'] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold leading-[1.05] tracking-tight">
            {hero.title}
          </h1>

          {/* Subtitle */}
          <p className="font-['Playfair_Display'] text-2xl md:text-4xl font-light italic text-background/90 mt-2">
            {hero.subtitle}
          </p>

          {/* Description */}
          <p className="max-w-2xl text-base md:text-lg text-background/80 leading-relaxed mt-8 font-light">
            {hero.description}
          </p>

          {/* CTA */}
          <Button
            size="lg"
            className="mt-10 rounded-full px-10 py-6 text-base font-medium bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 hover:-translate-y-0.5"
            onClick={() => navigate('/courses')}
          >
            {hero.ctaText}
          </Button>
        </motion.div>
      </div>

      {/* Bottom fade / scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 text-background/60"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-background/40" />
        </motion.div>
      </div>
    </section>
  );
}
