import { motion } from 'framer-motion';
import { MOCK_FEATURES } from '@/data/features';
import { Lotus } from '@/components/ui/lotus-icon';

export default function FeaturesSection() {
  return (
    <section className="w-full py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-3"
          >
            <span className="text-xs tracking-[0.3em] uppercase text-primary font-medium">
              Why Choose Us
            </span>
            <h2 className="font-['Playfair_Display'] text-3xl md:text-5xl font-semibold text-foreground">
              The Three Pillars
            </h2>
            <div className="flex items-center gap-3 mt-2">
              <div className="w-12 h-px bg-primary/40" />
              <Lotus className="w-5 h-5 text-primary/60" strokeWidth={1.5} />
              <div className="w-12 h-px bg-primary/40" />
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {MOCK_FEATURES.map((feature, i) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="group relative flex flex-col items-center text-center p-8 md:p-10 rounded-xl bg-card border border-border/60 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300"
            >
              {/* Number */}
              <span className="font-['Playfair_Display'] text-6xl md:text-7xl font-light text-primary/20 leading-none mb-4">
                {feature.number}
              </span>

              <Lotus className="w-8 h-8 text-primary/70 mb-4" strokeWidth={1.2} />

              <h3 className="font-['Playfair_Display'] text-xl md:text-2xl font-semibold text-foreground mb-4">
                {feature.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
