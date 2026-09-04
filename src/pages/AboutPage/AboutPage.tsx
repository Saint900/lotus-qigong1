import { motion } from 'framer-motion';
import { Heart, Sparkles, Leaf } from 'lucide-react';
import { Lotus } from '@/components/ui/lotus-icon';

const VALUES = [
  {
    icon: Heart,
    title: 'Authentic Heritage',
    desc: 'Rooted in centuries of Chinese martial arts wisdom, passed down through generations of dedicated practitioners.',
  },
  {
    icon: Sparkles,
    title: 'Simplicity & Power',
    desc: 'The greatest truths are the simplest. Just 12 minutes a day can transform your body, mind, and spirit.',
  },
  {
    icon: Leaf,
    title: 'Global Community',
    desc: 'Join practitioners from around the world in daily practice, united by the shared journey of Qi cultivation.',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative w-full py-20 md:py-28 bg-gradient-to-br from-primary/5 via-background to-primary/10 overflow-hidden">
        <div className="absolute bottom-8 left-8 opacity-10">
          <Lotus className="w-40 h-40 text-primary" strokeWidth={1} />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-4"
          >
            <Lotus className="w-10 h-10 text-primary/70" strokeWidth={1.2} />
            <span className="text-xs tracking-[0.3em] uppercase text-primary font-medium">
              Our Story
            </span>
            <h1 className="font-['Playfair_Display'] text-4xl md:text-6xl font-semibold text-foreground leading-tight">
              About Lotus Moving QiGong
            </h1>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mt-4">
              A journey through the ancient wisdom of Chinese martial arts,
              brought to the modern world by Master YoYun.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Brand story */}
      <section className="w-full py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-8 text-center"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-px bg-primary/40" />
              <Lotus className="w-5 h-5 text-primary/60" strokeWidth={1.5} />
              <div className="w-12 h-px bg-primary/40" />
            </div>

            <h2 className="font-['Playfair_Display'] text-3xl md:text-5xl font-semibold text-foreground">
              Our Philosophy
            </h2>

            <div className="space-y-5 text-muted-foreground leading-relaxed text-base md:text-lg text-left">
              <p>
                Chinese martial arts and Chinese culture are as vast as the boundless
                universe, with a multitude of varieties as numerous as stars. It is
                impossible for an ordinary person to learn them all in a lifetime.
              </p>
              <p>
                Lotus Moving QiGong was born from a simple truth: <span className="text-foreground font-medium">the greatest
                truths are the simplest.</span> This practice distills the essence of martial
                arts, TaiChi, yoga, and QiGong into a single, accessible 12-minute
                routine that anyone can master.
              </p>
              <p>
                Founded by Master YoYun after decades of dedicated practice and study,
                our mission is to share this transformative art with the world — helping
                people strengthen their bodies, unblock their meridians, and elevate
                their souls.
              </p>
              <p>
                We believe that harmony and enlightenment are not distant ideals — they
                are within reach, in every breath, in every movement.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Master introduction */}
      <section className="w-full py-16 md:py-24 bg-muted/50">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8 }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-2xl">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      'url(https://aka.doubaocdn.com/s/A6ryIh5lTR)',
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-transparent" />
              </div>
              <div className="absolute -top-6 -right-6 w-full h-full border-2 border-primary/30 rounded-xl -z-10" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2 flex flex-col gap-5"
            >
              <span className="text-xs tracking-[0.3em] uppercase text-primary font-medium">
                The Master
              </span>
              <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight">
                Master YoYun
              </h2>
              <p className="font-['Playfair_Display'] text-xl italic text-muted-foreground">
                &ldquo;Let Yourself Shine and Live as long as heaven and earth.&rdquo;
              </p>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Master YoYun has dedicated his life to the study and practice of
                  Chinese martial arts and QiGong. With over five decades of experience,
                  he has synthesized the essence of numerous traditions into the
                  profound yet simple practice of Lotus Moving QiGong.
                </p>
                <p>
                  His teaching style emphasizes accessibility — believing that the
                  deepest wisdom should be available to everyone, not just dedicated
                  monks or lifelong practitioners. With just 12 minutes a day, his
                  students around the world experience real transformations in body,
                  mind, and spirit.
                </p>
                <p>
                  Today, Master YoYun continues to guide a global community of
                  practitioners, sharing the timeless principles of harmony, balance,
                  and inner cultivation.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="w-full py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-14">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center gap-3"
            >
              <span className="text-xs tracking-[0.3em] uppercase text-primary font-medium">
                Our Values
              </span>
              <h2 className="font-['Playfair_Display'] text-3xl md:text-5xl font-semibold text-foreground">
                What We Stand For
              </h2>
              <div className="flex items-center gap-3">
                <div className="w-12 h-px bg-primary/40" />
                <Lotus className="w-5 h-5 text-primary/60" strokeWidth={1.5} />
                <div className="w-12 h-px bg-primary/40" />
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {VALUES.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  whileHover={{ y: -6, transition: { duration: 0.25 } }}
                  className="flex flex-col items-center text-center p-8 rounded-xl bg-card border border-border/60 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-['Playfair_Display'] text-xl font-semibold text-foreground mb-3">
                    {v.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {v.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
