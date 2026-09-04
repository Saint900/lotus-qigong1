import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Wind, Sparkles, Heart, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Lotus } from '@/components/ui/lotus-icon';

const MERIDIANS = [
  {
    icon: Wind,
    title: 'Conception Vessel (Ren Mai)',
    desc: 'Running up the front midline of the body, the Conception Vessel governs all Yin meridians — nurturing, cooling, and restoring the body&apos;s foundational Yin energy.',
  },
  {
    icon: Sun,
    title: 'Governor Vessel (Du Mai)',
    desc: 'Flowing up the spine to the crown of the head, the Governor Vessel governs all Yang meridians — activating vitality, willpower, and spiritual awareness.',
  },
  {
    icon: Sparkles,
    title: 'Central Channel (Zhong Mai)',
    desc: 'The central vertical channel at the core of the body, connecting the perineum to the crown. When open, Qi flows unobstructed — a state of profound balance and illumination.',
  },
];

const PRACTICES = [
  'Gentle stretching and loosening movements to prepare the body',
  'Diaphragmatic breathing to deepen and slow the breath',
  'Microcosmic orbit meditation to guide Qi through Ren and Du channels',
  'Standing postures (Zhan Zhuang) to build root and gather Qi',
  'Slow, flowing movements to open blockages along the meridian pathways',
  'Sound vibration techniques to resonate with specific energy centers',
];

export default function MeridianUnblockingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Top bar with back button */}
      <div className="w-full bg-background/80 backdrop-blur-sm border-b border-border/40">
        <div className="max-w-4xl mx-auto px-4 md:px-6 py-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate('/courses')}
            className="text-muted-foreground hover:text-primary -ml-2"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Courses
          </Button>
        </div>
      </div>

      {/* Hero */}
      <section className="relative w-full py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-primary/10 overflow-hidden">
        <div className="absolute top-10 right-10 opacity-10">
          <Lotus className="w-32 h-32 text-primary" strokeWidth={1} />
        </div>
        <div className="absolute bottom-10 left-10 opacity-10">
          <Lotus className="w-24 h-24 text-primary" strokeWidth={1} />
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
              Free Course
            </span>
            <h1 className="font-['Playfair_Display'] text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight">
              Meridian Unblocking Basics
            </h1>
            <p className="font-['Playfair_Display'] text-xl md:text-2xl text-muted-foreground italic mt-2">
              Open the pathways, awaken the flow
            </p>
            <div className="flex items-center gap-3 mt-4">
              <div className="w-12 h-px bg-primary/40" />
              <Lotus className="w-5 h-5 text-primary/60" strokeWidth={1.5} />
              <div className="w-12 h-px bg-primary/40" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro content */}
      <section className="w-full py-16 md:py-20 bg-background">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-foreground leading-relaxed"
          >
            <p className="text-lg md:text-xl font-['Playfair_Display'] italic text-foreground/80">
              &ldquo;The meridians are the rivers of the body. When they flow
              freely, life flourishes; when they stagnate, disharmony
              follows.&rdquo;
            </p>
            <p>
              In traditional Chinese medicine, the human body is understood as
              a network of energy pathways called <em>meridians</em> — subtle
              channels through which Qi, blood, and essence circulate. These
              pathways connect every organ, tissue, and system, forming an
              integrated whole that is far more than the sum of its parts.
            </p>
            <p>
              When meridians are open and balanced, Qi flows smoothly,
              supporting health, vitality, and emotional equilibrium. But when
              blockages form — due to stress, poor posture, emotional tension,
              injury, or unhealthy lifestyle patterns — the flow of Qi is
              disrupted. Over time, this disruption can manifest as physical
              discomfort, fatigue, anxiety, and a weakened immune system.
            </p>
            <p>
              Meridian unblocking is the foundational practice of clearing
              these obstructions so that Qi may flow freely once again. Through
              gentle movement, breathwork, and focused intention, practitioners
              learn to sense, stimulate, and open the body&apos;s key meridian
              pathways — beginning with two of the most important channels in
              the entire system: the Conception Vessel and the Governor Vessel.
            </p>
          </motion.article>
        </div>
      </section>

      {/* Three meridians */}
      <section className="w-full py-16 md:py-20 bg-muted/40">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center gap-3"
            >
              <span className="text-xs tracking-[0.3em] uppercase text-primary font-medium">
                Key Energy Pathways
              </span>
              <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-semibold text-foreground">
                The Three Great Channels
              </h2>
              <div className="flex items-center gap-3 mt-2">
                <div className="w-12 h-px bg-primary/40" />
                <Lotus className="w-5 h-5 text-primary/60" strokeWidth={1.5} />
                <div className="w-12 h-px bg-primary/40" />
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {MERIDIANS.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-card border border-border/60 rounded-xl p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-['Playfair_Display'] text-xl font-semibold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits + practice list */}
      <section className="w-full py-16 md:py-20 bg-background">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Why unblock meridians */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div>
                <span className="text-xs tracking-[0.3em] uppercase text-primary font-medium">
                  Why Unblock Meridians
                </span>
                <h2 className="font-['Playfair_Display'] text-3xl font-semibold text-foreground mt-3">
                  The Benefits of Open Channels
                </h2>
                <div className="flex items-center gap-3 mt-4">
                  <div className="w-12 h-px bg-primary/40" />
                  <Lotus className="w-5 h-5 text-primary/60" strokeWidth={1.5} />
                </div>
              </div>
              <ul className="space-y-4">
                {[
                  'Deep, restful sleep and vivid dreams',
                  'Improved digestion and nutrient absorption',
                  'Reduced stress, anxiety, and emotional turbulence',
                  'Stronger immunity and faster recovery from fatigue',
                  'Greater flexibility, mobility, and physical ease',
                  'Heightened mental clarity and focus',
                  'A lasting sense of calm, centeredness, and inner peace',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground/80 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* What you'll practice */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card border border-border/60 rounded-xl p-8 shadow-sm"
            >
              <h3 className="font-['Playfair_Display'] text-2xl font-semibold text-foreground mb-6">
                What You&apos;ll Practice
              </h3>
              <ul className="space-y-4">
                {PRACTICES.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary font-['Playfair_Display'] text-sm font-semibold flex items-center justify-center">
                      {i + 1}
                    </span>
                    <span className="text-foreground/80 leading-relaxed text-sm md:text-base">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-border/40">
                <p className="text-sm text-muted-foreground italic">
                  &ldquo;The journey of a thousand miles begins with a single
                  step. The journey of a thousand meridians begins with a
                  single breath.&rdquo;
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-16 md:py-20 bg-muted/40">
        <div className="max-w-3xl mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-6"
          >
            <Lotus className="w-10 h-10 text-primary/60" strokeWidth={1.2} />
            <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-semibold text-foreground leading-tight">
              Begin Unblocking Your Meridians Today
            </h2>
            <p className="text-muted-foreground max-w-xl">
              This foundational course is completely free — our gift to anyone
              seeking a first step into the profound world of Qi cultivation.
              Explore more courses to deepen your practice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <Button
                size="lg"
                onClick={() => navigate('/courses')}
                className="rounded-full px-8 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5"
              >
                Explore All Courses
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => navigate(-1)}
                className="rounded-full px-8 border-primary text-primary hover:bg-primary/10"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Go Back
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
