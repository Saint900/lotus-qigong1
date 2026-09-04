import { Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { Layout } from "@/components/Layout";
import HomePage from "@/pages/HomePage/HomePage";
import CoursesPage from "@/pages/CoursesPage/CoursesPage";
import AboutPage from "@/pages/AboutPage/AboutPage";
import IntroQigongPage from "@/pages/IntroQigongPage/IntroQigongPage";
import MeridianUnblockingPage from "@/pages/MeridianUnblockingPage/MeridianUnblockingPage";
import NotFoundPage from "@/pages/NotFoundPage/NotFoundPage";

export default function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="courses" element={<CoursesPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="intro-qigong" element={<IntroQigongPage />} />
          <Route path="meridian-unblocking" element={<MeridianUnblockingPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Analytics />
    </>
  );
}
