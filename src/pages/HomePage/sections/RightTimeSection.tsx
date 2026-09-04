import { motion } from 'framer-motion';
import { Home, BookOpen, Users } from 'lucide-react';
import { Lotus } from '@/components/ui/lotus-icon';

const CARDS = [
  {
    icon: Home,
    title: 'Learn from home',
    description:
      'The greatest truths are the simplest. You can master seven movements in one go, and these will benefit you for a lifetime.',
    variant: 'wine',
  },
  {
    icon: BookOpen,
    title: 'The master personally teaches the rhymes',
    description:
      'There are rhymes and mental focus techniques, which can make your workout twice as effective with half the effort.',
    variant: 'light',
  },
  {
    icon: Users,
    title: 'Connect with Master YoYun',
    description:
      'Every day, practitioners around the world check in, creating a kind of "quantum entanglement".',
    variant: 'dark',
  },
];

export default function RightTimeSection() {
  return (
    <section className="w-full py-20 md:py-28 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-4"
          >
            <span className="text-xs tracking-[0.3em] uppercase text-primary font-medium">
              Why Now
            </span>
            <h2 className="font-['Playfair_Display'] text-3xl md:text-5xl font-semibold text-foreground leading-tight">
              The Right Time for<br />Lotus Moving QiGong
            </h2>
            <div className="flex items-center gap-3">
              <div className="w-12 h-px bg-primary/40" />
              <Lotus className="w-5 h-5 text-primary/60" strokeWidth={1.5} />
              <div className="w-12 h-px bg-primary/40" />
            </div>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mt-2">
              We designed Lotus Moving QiGong to help those who are truly ready to
              explore their deepest innermost layers.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {CARDS.map((card, i) => {
            const Icon = card.icon;
            const variantStyles = {
              wine: 'bg-primary text-primary-foreground',
              light: 'bg-card text-foreground border border-border/60',
              dark: 'bg-foreground text-background',
            } as const;
            const iconStyles = {
              wine: 'bg-primary-foreground/20 text-primary-foreground',
              light: 'bg-primary/10 text-primary',
              dark: 'bg-background/20 text-background',
            } as const;

            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
                className={`relative rounded-xl p-8 md:p-10 shadow-md hover:shadow-2xl transition-all duration-300 ${variantStyles[card.variant]}`}
              >
                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center mb-6 ${iconStyles[card.variant]}`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-['Playfair_Display'] text-2xl font-semibold mb-4">
                  {card.title}
                </h3>
                <p className={`leading-relaxed text-sm md:text-base ${
                  card.variant === 'light' ? 'text-muted-foreground' : 'opacity-90'
                }`}>
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
