import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Leaf, Sparkles, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Lotus } from '@/components/ui/lotus-icon';

const BENEFITS = [
  {
    icon: Leaf,
    title: 'Cultivate Vital Energy',
    desc: 'QiGong teaches you to gather, circulate, and store your innate vital energy — the foundation of lasting health and inner strength.',
  },
  {
    icon: Sparkles,
    title: 'Calm the Mind',
    desc: 'Through slow, intentional movement paired with focused breathing, the restless mind settles naturally, bringing clarity and peace.',
  },
  {
    icon: Heart,
    title: 'Harmonize Body & Spirit',
    desc: 'When Qi flows freely, body, breath, and spirit align — dissolving tension, improving sleep, and awakening your natural vitality.',
  },
];

export default function IntroQigongPage() {
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
              Free Introduction
            </span>
            <h1 className="font-['Playfair_Display'] text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight">
              Introduction to QiGong
            </h1>
            <p className="font-['Playfair_Display'] text-xl md:text-2xl text-muted-foreground italic mt-2">
              Discover the ancient art of cultivating life energy
            </p>
            <div className="flex items-center gap-3 mt-4">
              <div className="w-12 h-px bg-primary/40" />
              <Lotus className="w-5 h-5 text-primary/60" strokeWidth={1.5} />
              <div className="w-12 h-px bg-primary/40" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
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
              &ldquo;Qi is the vital energy that flows through all living things.
              To cultivate Qi is to cultivate life itself.&rdquo;
            </p>
            <p>
              QiGong, literally &ldquo;energy work,&rdquo; is an ancient Chinese
              practice that combines gentle movement, controlled breathing, and
              focused intention to cultivate and balance the body&apos;s vital
              life force — known as <em>Qi</em>. With roots stretching back over
              five thousand years, it is one of the cornerstones of traditional
              Chinese health and spiritual practice.
            </p>
            <p>
              At its core, QiGong is based on a simple yet profound principle:
              when Qi flows freely through the body&apos;s meridian pathways,
              health naturally abounds; when Qi becomes stagnant or depleted,
              discomfort and disharmony follow. Through systematic practice,
              practitioners learn to sense, gather, and direct this subtle
              energy — restoring balance from within.
            </p>
            <p>
              Unlike intense exercise that consumes energy, QiGong builds and
              stores it. Even ten to fifteen minutes of daily practice can
              reduce stress, improve sleep, strengthen the immune system, and
              bring a deep sense of calm and centeredness to daily life. It is
              suitable for all ages and fitness levels — no prior experience
              required.
            </p>
            <p className="text-primary font-medium font-['Playfair_Display'] text-lg">
              This free introduction will guide you through the foundational
              principles of QiGong, helping you take your first step on the
              path toward greater vitality, clarity, and inner peace.
            </p>
          </motion.article>
        </div>
      </section>

      {/* Benefits */}
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
                What You&apos;ll Gain
              </span>
              <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-semibold text-foreground">
                The Benefits of Practice
              </h2>
              <div className="flex items-center gap-3 mt-2">
                <div className="w-12 h-px bg-primary/40" />
                <Lotus className="w-5 h-5 text-primary/60" strokeWidth={1.5} />
                <div className="w-12 h-px bg-primary/40" />
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BENEFITS.map((item, i) => {
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

      {/* CTA */}
      <section className="w-full py-16 md:py-20 bg-background">
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
              Ready to Begin Your Journey?
            </h2>
            <p className="text-muted-foreground max-w-xl">
              Explore our full course catalog and find the practice that
              resonates with you. From foundational QiGong to advanced
              meridian cultivation, every path begins with a single breath.
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
