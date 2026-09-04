import { useState, useMemo, useEffect, type ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Tag, Sparkles, Clock, Award, Star, Check } from 'lucide-react';
import { scopedStorage } from '@/lib/storage';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { MOCK_COURSES } from '@/data/courses-page';
import type { ICourse } from '@/data/courses-page';
import { Lotus } from '@/components/ui/lotus-icon';
import { toast } from 'sonner';

type FilterKey = 'all' | 'my' | 'not-enrolled' | 'newest' | 'popular' | 'free' | 'certificate';

const ENROLLED_STORAGE_KEY = 'lotus_qigong_enrolled';
const PAYPAL_PAYMENT_URL = 'https://www.paypal.com/ncp/payment/TUUDTECV7JZAG';

// Free intro courses navigate to their introduction pages instead of PayPal
const INTRO_COURSE_ROUTES: Record<string, string> = {
  '1': '',
  '2': '/meridian-unblocking',
  '3': '/intro-qigong',
};

const FILTERS: { key: FilterKey; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'my', label: 'My' },
  { key: 'not-enrolled', label: 'Not Enrolled' },
  { key: 'newest', label: 'Newest' },
  { key: 'popular', label: 'Popular' },
  { key: 'free', label: 'Free' },
  { key: 'certificate', label: 'Certificate' },
];

export default function CourseListSection() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState<FilterKey>('all');
  const [keyword, setKeyword] = useState('');
  const [enrolledIds, setEnrolledIds] = useState<string[]>([]);

  // Load enrolled courses from local storage on mount
  useEffect(() => {
    try {
      const raw = scopedStorage.getItem(ENROLLED_STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as string[];
        if (Array.isArray(parsed)) setEnrolledIds(parsed);
      }
    } catch {
      // ignore parse errors
    }
  }, []);

  const isEnrolled = (id: string) => enrolledIds.includes(id);

  const toggleEnroll = (id: string) => {
    setEnrolledIds((prev) => {
      const next = prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id];
      try {
        scopedStorage.setItem(ENROLLED_STORAGE_KEY, JSON.stringify(next));
      } catch {
        // ignore storage errors
      }
      return next;
    });
  };

  const filtered = useMemo(() => {
    return MOCK_COURSES.filter((c) => {
      // keyword
      if (keyword.trim()) {
        const kw = keyword.toLowerCase();
        if (
          !c.name.toLowerCase().includes(kw) &&
          !c.description.toLowerCase().includes(kw) &&
          !c.instructor.toLowerCase().includes(kw)
        ) {
          return false;
        }
      }
      // filter
      switch (filter) {
        case 'all':
          return true;
        case 'my':
          return isEnrolled(c.id);
        case 'not-enrolled':
          return !isEnrolled(c.id);
        case 'newest':
          return c.isNewest;
        case 'popular':
          return c.isPopular;
        case 'free':
          return c.isFree;
        case 'certificate':
          return c.hasCertificate;
        default:
          return true;
      }
    });
  }, [filter, keyword]);

  const onEnroll = (course: ICourse) => {
    const enrolled = isEnrolled(course.id);
    if (enrolled) {
      // Already enrolled → remove from My Courses
      toggleEnroll(course.id);
      toast.info(`Removed "${course.name}" from My Courses.`);
      return;
    }
    const introRoute = INTRO_COURSE_ROUTES[course.id];
    if (introRoute) {
      // Free intro course → navigate to its introduction page
      navigate(introRoute);
      return;
    }
    // Paid course → open PayPal in new tab, then mark as enrolled
    window.open(PAYPAL_PAYMENT_URL, '_blank', 'noopener,noreferrer');
    toggleEnroll(course.id);
    toast.success(`Opening PayPal checkout for "${course.name}" in a new tab...`, {
      description: 'Complete your payment on the PayPal page.',
    });
  };

  const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  return (
    <section className="w-full py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex flex-col items-center gap-3 mb-8">
            <span className="text-xs tracking-[0.3em] uppercase text-primary font-medium">
              Our Programs
            </span>
            <h2 className="font-['Playfair_Display'] text-3xl md:text-5xl font-semibold text-foreground">
              Find your perfect course
            </h2>
            <div className="flex items-center gap-3">
              <div className="w-12 h-px bg-primary/40" />
              <Lotus className="w-5 h-5 text-primary/60" strokeWidth={1.5} />
              <div className="w-12 h-px bg-primary/40" />
            </div>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
            {FILTERS.map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  filter === f.key
                    ? 'bg-primary text-primary-foreground shadow-md shadow-primary/20'
                    : 'bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
            <Input
              type="search"
              value={keyword}
              onChange={onSearchChange}
              placeholder="Search courses..."
              className="pl-9 pr-4 py-6 rounded-full border border-border bg-card"
            />
          </div>
        </div>

        {/* Course grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-muted-foreground">
            <p className="text-lg">No courses match your search.</p>
            <Button variant="ghost" onClick={() => { setFilter('all'); setKeyword(''); }} className="mt-4">
              Clear filters
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((course, i) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="group flex flex-col bg-card rounded-xl overflow-hidden border border-border/60 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${course.imageUrl})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-transparent" />

                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-2">
                    {course.isSpecialOffer && (
                      <Badge className="bg-primary hover:bg-primary text-primary-foreground shadow-md">
                        <Tag className="w-3 h-3 mr-1" />
                        Special Offer
                      </Badge>
                    )}
                    {course.isNewest && (
                      <Badge variant="secondary" className="bg-card text-foreground">
                        <Sparkles className="w-3 h-3 mr-1" />
                        New
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col p-6 gap-4">
                  <div>
                    <h3 className="font-['Playfair_Display'] text-xl font-semibold text-foreground">
                      {course.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      by {course.instructor}
                    </p>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {course.description}
                  </p>

                  {/* Meta tags */}
                  <div className="flex flex-wrap gap-2">
                    {course.isPopular && (
                      <Badge variant="outline" className="text-xs">
                        <Star className="w-3 h-3 mr-1 fill-primary/20 text-primary" />
                        Popular
                      </Badge>
                    )}
                    {course.hasCertificate && (
                      <Badge variant="outline" className="text-xs">
                        <Award className="w-3 h-3 mr-1 text-primary" />
                        Certificate
                      </Badge>
                    )}
                    {course.isFree && (
                      <Badge variant="outline" className="text-xs">
                        <Clock className="w-3 h-3 mr-1 text-primary" />
                        Free
                      </Badge>
                    )}
                  </div>

                  <div className="mt-auto flex items-end justify-between pt-4 border-t border-border/40">
                    <div className="flex items-baseline gap-2">
                      {course.isFree ? (
                        <span className="font-['Playfair_Display'] text-2xl font-semibold text-primary">
                          Free
                        </span>
                      ) : (
                        <>
                          <span className="font-['Playfair_Display'] text-2xl font-semibold text-primary">
                            ${course.price}
                          </span>
                          {course.originalPrice > 0 && (
                            <span className="text-sm text-muted-foreground line-through">
                              ${course.originalPrice.toLocaleString()}
                            </span>
                          )}
                        </>
                      )}
                    </div>

                    <Button
                      onClick={() => onEnroll(course)}
                      size="sm"
                      variant={isEnrolled(course.id) ? 'outline' : 'default'}
                      className={`rounded-full px-5 ${isEnrolled(course.id) ? 'border-primary text-primary hover:bg-primary/10' : 'bg-primary hover:bg-primary/90 text-primary-foreground'}`}
                    >
                      {isEnrolled(course.id) ? (
                        <>
                          <Check className="w-3.5 h-3.5 mr-1" />
                          Enrolled
                        </>
                      ) : (
                        'Enroll'
                      )}
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
