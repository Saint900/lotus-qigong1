import HeroSection from './sections/HeroSection';
import FeaturesSection from './sections/FeaturesSection';
import RightTimeSection from './sections/RightTimeSection';
import MasterSection from './sections/MasterSection';
import StatsSection from './sections/StatsSection';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <FeaturesSection />
      <RightTimeSection />
      <MasterSection />
      <StatsSection />
    </div>
  );
}
