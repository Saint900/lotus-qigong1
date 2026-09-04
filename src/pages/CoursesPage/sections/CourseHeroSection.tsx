import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Lotus } from '@/components/ui/lotus-icon';

interface CourseHeroSectionProps {
  onStart: () => void;
}

export default function CourseHeroSection({ onStart }: CourseHeroSectionProps) {
  return (
    <section className="relative w-full py-24 md:py-32 bg-gradient-to-br from-primary/5 via-background to-primary/10 overflow-hidden">
      {/* Decorative lotuses */}
      <div className="absolute top-10 left-10 opacity-10">
        <Lotus className="w-32 h-32 text-primary" strokeWidth={1} />
      </div>
      <div className="absolute bottom-10 right-10 opacity-10">
        <Lotus className="w-40 h-40 text-primary" strokeWidth={1} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-4"
        >
          <Lotus className="w-10 h-10 text-primary/70" strokeWidth={1.2} />
          <span className="text-xs tracking-[0.3em] uppercase text-primary font-medium">
            Lotus Moving QiGong
          </span>
          <h1 className="font-['Playfair_Display'] text-3xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight">
            Explore the QiGong lifestyle &<br />learn more about our community
          </h1>
          <p className="font-['Playfair_Display'] text-xl md:text-2xl text-muted-foreground italic mt-2">
            Make QiGong part of your life
          </p>
          <Button
            size="lg"
            onClick={onStart}
            className="mt-8 rounded-full px-10 py-6 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5"
          >
            Start now
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
