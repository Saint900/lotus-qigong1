import { Link } from "react-router-dom";
import { Lotus } from "@/components/ui/lotus-icon";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4">
      <Lotus className="w-12 h-12 text-primary/40 mb-6" strokeWidth={1} />
      <h1 className="font-['Playfair_Display'] text-7xl md:text-8xl font-semibold text-primary mb-4">404</h1>
      <h2 className="font-['Playfair_Display'] text-2xl md:text-3xl font-medium text-foreground mb-3">
        Page Not Found
      </h2>
      <p className="text-muted-foreground mb-8 text-center max-w-md">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        to="/"
        className="px-6 py-2.5 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors shadow-md shadow-primary/20"
      >
        Back to Home
      </Link>
    </div>
  );
}
