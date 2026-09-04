import { motion } from 'framer-motion';
import { MOCK_STATS } from '@/data/stats';
import { Lotus } from '@/components/ui/lotus-icon';

export default function StatsSection() {
  return (
    <section className="w-full py-16 md:py-20 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 30%, white 1px, transparent 1px), radial-gradient(circle at 70% 60%, white 1px, transparent 1px)",
            backgroundSize: '60px 60px, 80px 80px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-3"
          >
            <Lotus className="w-8 h-8 text-primary-foreground/60" strokeWidth={1.2} />
            <h2 className="font-['Playfair_Display'] text-2xl md:text-3xl font-medium">
              Our Journey in Numbers
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-4">
          {MOCK_STATS.map((stat, i) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <span className="font-['Playfair_Display'] text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                {stat.value}
              </span>
              <span className="text-sm md:text-base text-primary-foreground/80 mt-2 tracking-wide">
                {stat.label}
              </span>
              {i < MOCK_STATS.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-primary-foreground/20" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
