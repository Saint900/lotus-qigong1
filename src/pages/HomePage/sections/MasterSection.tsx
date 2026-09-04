import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Quote } from 'lucide-react';
import { Lotus } from '@/components/ui/lotus-icon';

const MASTER_IMAGE = '/images/master.jpg';

export default function MasterSection() {
  const navigate = useNavigate();

  return (
    <section className="w-full py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-2xl">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${MASTER_IMAGE})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />
            </div>

            {/* Decorative frame */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-primary/30 rounded-xl -z-10" />

            {/* Lotus decoration */}
            <div className="absolute -top-6 -left-6">
              <Lotus className="w-16 h-16 text-primary/20" strokeWidth={1} />
            </div>
          </motion.div>

          {/* Right: text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6"
          >
            <span className="text-xs tracking-[0.3em] uppercase text-primary font-medium">
              Meet the Master
            </span>

            <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight">
              The greatest truths are the simplest.
              <span className="block text-primary">One QiGong VS All Kungfu</span>
            </h2>

            <div className="flex items-center gap-3">
              <div className="w-12 h-px bg-primary/40" />
              <Lotus className="w-5 h-5 text-primary/60" strokeWidth={1.5} />
              <div className="w-12 h-px bg-primary/40" />
            </div>

            <blockquote className="flex items-start gap-3 font-['Playfair_Display'] text-xl md:text-2xl italic text-foreground/80">
              <Quote className="w-6 h-6 text-primary/40 shrink-0 mt-1" />
              <p>Let Yourself Shine and Live as long as heaven and earth</p>
            </blockquote>

            <p className="text-muted-foreground leading-relaxed text-base">
              Chinese martial arts and Chinese culture are as vast as the boundless
              universe, with a multitude of varieties as numerous as stars. It&apos;s
              impossible for an ordinary person to learn them all in a lifetime, and
              even among the common Chinese people, few are fully aware of them.
            </p>
            <p className="text-muted-foreground leading-relaxed text-base">
              However, once you learn the Lotus Moving QiGong, just 12 minutes of
              practice following the instructions can transform your life. The Lotus
              Moving QiGong is a comprehensive integration of martial arts, TaiChi,
              yoga, and QiGong. After practicing this QiGong, you won&apos;t need to
              learn any other QiGong or any other martial arts.
            </p>

            <div className="pt-4">
              <Button
                size="lg"
                className="rounded-full px-8 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5"
                onClick={() => navigate('/courses')}
              >
                Explore our courses
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
