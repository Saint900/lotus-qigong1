import CourseHeroSection from './sections/CourseHeroSection';
import CourseListSection from './sections/CourseListSection';

export default function CoursesPage() {
  const handleStart = () => {
    document.getElementById('course-list')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <CourseHeroSection onStart={handleStart} />
      <div id="course-list">
        <CourseListSection />
      </div>
    </div>
  );
}
