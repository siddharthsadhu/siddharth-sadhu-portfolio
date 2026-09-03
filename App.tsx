import React, { useState, useEffect, useCallback } from 'react';
import { Page, Project } from './types';
import { PROJECTS_DATA } from './data';
import { Home } from './pages/Home';
import { Journey } from './pages/Journey';
import { Projects } from './pages/Projects';
import { ProjectDeepDive } from './pages/ProjectDeepDive';
import { Experience } from './pages/Experience';
import { HackathonsCertifications } from './pages/HackathonsCertifications';
import { Contact } from './pages/Contact';
import { CursorFollower } from './components/CursorFollower';
import { AnimatePresence, motion } from 'framer-motion';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from '@vercel/analytics/react';

// Helper to get page from URL hash
const getPageFromHash = (): Page => {
  const hash = window.location.hash.slice(1);
  const validPages = Object.values(Page);
  if (hash && validPages.includes(hash as Page)) {
    return hash as Page;
  }
  return Page.Home;
};

// Page transition variants
const pageVariants = {
  initial: { opacity: 0, y: 20, filter: 'blur(6px)' },
  animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
  exit: { opacity: 0, y: -10, filter: 'blur(4px)' },
};

const pageTransition = {
  type: 'tween' as const,
  ease: [0.23, 1, 0.32, 1] as [number, number, number, number],
  duration: 0.5,
};

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(() => getPageFromHash());
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [hasBegun, setHasBegun] = useState(() => getPageFromHash() !== Page.Home);

  const narrativeSequence = [
    Page.Journey,
    Page.Projects,
    Page.Experience,
    Page.HackathonsCertifications,
    Page.Contact
  ];

  const navPages = [
    Page.Journey,
    Page.Projects,
    Page.Experience,
    Page.HackathonsCertifications,
    Page.Contact
  ];

  const pageDisplayNames: Record<Page, string> = {
    [Page.Home]: 'Home',
    [Page.Journey]: 'Journey',
    [Page.Projects]: 'Projects',
    [Page.ProjectDeepDive]: 'Projects',
    [Page.Experience]: 'Experience',
    [Page.HackathonsCertifications]: 'Achievements',
    [Page.Contact]: 'Contact'
  };

  // Permanent Dark Theme setup
  useEffect(() => {
    document.documentElement.classList.remove('light');
    document.documentElement.classList.add('dark');
  }, []);

  // Scroll to top + update title on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const pageTitle = pageDisplayNames[currentPage] || 'Home';
    document.title = currentPage === Page.Home
      ? 'Hey there! • I am Siddharth Sadhu'
      : `${pageTitle} • I am Siddharth Sadhu`;
  }, [currentPage]);

  // Initial history state
  useEffect(() => {
    const initialPage = getPageFromHash();
    const initialHash = initialPage === Page.Home ? '' : `#${initialPage}`;
    window.history.replaceState({ page: initialPage }, '', `/${initialHash}`);
  }, []);

  // Browser back/forward
  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      const page = event.state?.page || getPageFromHash();
      if (page !== Page.Home) setHasBegun(true);
      setCurrentPage(page);
      if (page !== Page.ProjectDeepDive) setSelectedProject(null);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = useCallback((page: Page, fromPopstate: boolean = false) => {
    if (page !== Page.Home) setHasBegun(true);
    setCurrentPage(page);
    if (page !== Page.ProjectDeepDive) setSelectedProject(null);

    if (!fromPopstate) {
      const newHash = page === Page.Home ? '' : `#${page}`;
      window.history.pushState({ page }, '', `/${newHash}`);
    }
  }, []);

  const handleSelectProject = (project: Project) => {
    setSelectedProject(project);
    navigateTo(Page.ProjectDeepDive);
  };

  const handleSelectProjectById = (projectId: string) => {
    const proj = PROJECTS_DATA.find((p) => p.id === projectId);
    if (proj) {
      handleSelectProject(proj);
    } else {
      navigateTo(Page.Projects);
    }
  };

  const handleNavigateToHackathons = () => {
    navigateTo(Page.HackathonsCertifications);
  };

  const handleContinueNarrative = () => {
    const currentMainPage = currentPage === Page.ProjectDeepDive ? Page.Projects : currentPage;
    const currentIndex = narrativeSequence.indexOf(currentMainPage);

    if (currentIndex === -1) {
      navigateTo(Page.Journey);
    } else if (currentIndex < narrativeSequence.length - 1) {
      navigateTo(narrativeSequence[currentIndex + 1]);
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case Page.Home: return <Home onBegin={navigateTo} />;
      case Page.Journey: return <Journey onNavigateToHackathons={handleNavigateToHackathons} />;
      case Page.Projects: return <Projects onSelect={handleSelectProject} />;
      case Page.ProjectDeepDive:
        return selectedProject ? (
          <ProjectDeepDive project={selectedProject} onBack={() => navigateTo(Page.Projects)} />
        ) : <Projects onSelect={handleSelectProject} />;
      case Page.Experience: return <Experience />;
      case Page.HackathonsCertifications: return <HackathonsCertifications />;
      case Page.Contact: return <Contact />;
      default: return <Home onBegin={navigateTo} />;
    }
  };

  const isPageActive = (page: Page) => {
    if (page === Page.Projects && currentPage === Page.ProjectDeepDive) return true;
    return currentPage === page;
  };

  return (
    <div className="relative min-h-screen font-sans bg-[#0A0A0B] text-[#F9FAFB] dark">
      <CursorFollower />

      {/* Navigation */}
      <nav
        aria-label="Main navigation"
        className={`fixed top-0 left-0 right-0 z-50 px-6 py-5 md:px-16 lg:px-24 flex justify-between items-center transition-all duration-700 ease-out-expo ${
          hasBegun
            ? 'glass bg-white/[0.03] border-b border-white/[0.04] opacity-100 shadow-none'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <button
          onClick={() => navigateTo(Page.Home)}
          aria-label="Go to home page"
          className="text-white/90 text-sm font-bold tracking-[0.25em] uppercase hover:text-purple-400 transition-colors duration-300 cursor-pointer"
        >
          S. Sadhu
        </button>

        <div className="flex items-center space-x-6 lg:space-x-8">
          <div className="flex items-center space-x-5 lg:space-x-8">
            {navPages.map((page) => (
              <button
                key={page}
                onClick={() => navigateTo(page)}
                aria-current={isPageActive(page) ? 'page' : undefined}
                className={`relative text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 hover:text-purple-400 cursor-pointer ${
                  isPageActive(page)
                    ? 'text-purple-400'
                    : 'text-slate-400'
                }`}
              >
                {pageDisplayNames[page]}
                {isPageActive(page) && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute -bottom-2 left-0 right-0 h-[1.5px] bg-gradient-to-r from-purple-500 to-indigo-500"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content with Page Transitions */}
      <AnimatePresence mode="wait">
        <motion.main
          key={currentPage}
          aria-label="Portfolio content"
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={pageTransition}
          className="transition-opacity duration-700"
        >
          {renderPage()}
        </motion.main>
      </AnimatePresence>

      {/* Vercel Speed Insights & Real-time Web Analytics */}
      <SpeedInsights />
      <Analytics />
    </div>
  );
};

export default App;
