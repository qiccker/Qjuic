import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PageTransition from './components/PageTransition';
import Home from './pages/Home';
import WorkArchive from './pages/WorkArchive';
import ProjectDetail from './pages/ProjectDetail';

/* Scroll-triggered animation observer */
function useScrollAnimations() {
  const location = useLocation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    const observe = () => {
      document.querySelectorAll('.animate-on-scroll').forEach((el) => {
        observer.observe(el);
      });
    };

    // Initial + delayed observe for dynamic content
    observe();
    const timer = setTimeout(observe, 300);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, [location.pathname]);
}

export default function App() {
  useScrollAnimations();

  return (
    <>
      <Navbar />
      <PageTransition>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<WorkArchive />} />
            <Route path="/work/:slug" element={<ProjectDetail />} />
          </Routes>
        </main>
      </PageTransition>
      <Footer />
    </>
  );
}
