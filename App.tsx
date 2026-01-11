
import React, { useState, useEffect, useCallback } from 'react';
import { Page, Theme, Project } from './types';
import { Home } from './pages/Home';
import { Journey } from './pages/Journey';
import { Projects } from './pages/Projects';
import { ProjectDeepDive } from './pages/ProjectDeepDive';
import { Experience } from './pages/Experience';
import { HackathonsCertifications } from './pages/HackathonsCertifications';
import { Contact } from './pages/Contact';
import { ThemeToggle } from './components/ThemeToggle';

// Helper to get page from URL hash
const getPageFromHash = (): Page => {
  const hash = window.location.hash.slice(1); // Remove '#'
  const validPages = Object.values(Page);
  if (hash && validPages.includes(hash as Page)) {
    return hash as Page;
  }
  return Page.Home;
};

const App: React.FC = () => {
  // Initialize state from URL hash
  const [currentPage, setCurrentPage] = useState<Page>(() => getPageFromHash());
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [hasBegun, setHasBegun] = useState(() => getPageFromHash() !== Page.Home);
  const [theme, setTheme] = useState<Theme>('dark');

  // Defined narrative sequence to ensure strict guided flow
  const narrativeSequence = [
    Page.Journey,
    Page.Projects,
    Page.Experience,
    Page.HackathonsCertifications,
    Page.Contact
  ];

  // Pages shown in navigation bar
  const navPages = [
    Page.Journey,
    Page.Projects,
    Page.Experience,
    Page.HackathonsCertifications,
    Page.Contact
  ];

  // Display names for pages
  const pageDisplayNames: Record<Page, string> = {
    [Page.Home]: 'Home',
    [Page.Journey]: 'Journey',
    [Page.Projects]: 'Projects',
    [Page.ProjectDeepDive]: 'Projects',
    [Page.Experience]: 'Experience',
    [Page.HackathonsCertifications]: 'Achievements',
    [Page.Contact]: 'Contact'
  };

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  // Set up initial history state on mount
  useEffect(() => {
    const initialPage = getPageFromHash();
    const initialHash = initialPage === Page.Home ? '' : `#${initialPage}`;
    window.history.replaceState({ page: initialPage }, '', `/${initialHash}`);
  }, []);

  // Handle browser back/forward navigation
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

  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');

  const navigateTo = useCallback((page: Page, fromPopstate: boolean = false) => {
    if (page !== Page.Home) setHasBegun(true);
    setCurrentPage(page);
    if (page !== Page.ProjectDeepDive) setSelectedProject(null);

    // Only push history if not navigating from popstate event
    if (!fromPopstate) {
      const newHash = page === Page.Home ? '' : `#${page}`;
      window.history.pushState({ page }, '', `/${newHash}`);
    }
  }, []);

  const handleSelectProject = (project: Project) => {
    setSelectedProject(project);
    navigateTo(Page.ProjectDeepDive);
  };

  const handleNavigateToHackathons = () => {
    navigateTo(Page.HackathonsCertifications);
  };

  const handleContinueNarrative = () => {
    // If we are currently in a deep dive, we treat it as being on the Projects page for narrative flow
    const currentMainPage = currentPage === Page.ProjectDeepDive ? Page.Projects : currentPage;

    const currentIndex = narrativeSequence.indexOf(currentMainPage);

    if (currentIndex === -1) {
      // If we're on Home or somewhere else, start at Journey
      navigateTo(Page.Journey);
    } else if (currentIndex < narrativeSequence.length - 1) {
      // Go to next item in the sequence
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
    <div className="relative min-h-screen font-sans transition-colors duration-500 bg-background-light dark:bg-background-dark">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 px-8 py-6 md:px-24 flex justify-between items-center transition-all duration-500 ${hasBegun ? 'glass-effect bg-white/60 dark:bg-white/5 border-b border-slate-200 dark:border-white/5 opacity-100 shadow-sm dark:shadow-none' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
        <button
          onClick={() => navigateTo(Page.Home)}
          className="text-slate-900 dark:text-white text-sm font-bold tracking-[0.3em] uppercase hover:text-purple-700 dark:hover:text-purple-500 transition-colors"
        >
          S. Sadhu
        </button>

        <div className="flex items-center space-x-8 lg:space-x-12">
          <div className="hidden md:flex items-center space-x-6 lg:space-x-10">
            {navPages.map((page) => (
              <button
                key={page}
                onClick={() => navigateTo(page)}
                className={`text-[10px] font-bold uppercase tracking-[0.2em] transition-all hover:text-purple-700 dark:hover:text-purple-500 ${isPageActive(page) ? 'text-purple-700 dark:text-purple-500 underline underline-offset-8' : 'text-slate-500 dark:text-slate-400'}`}
              >
                {pageDisplayNames[page]}
              </button>
            ))}
          </div>
          <ThemeToggle theme={theme} toggle={toggleTheme} />
        </div>
      </nav>

      {/* Main Content */}
      <main className="transition-opacity duration-700">
        {renderPage()}
      </main>

      {/* Guided Progress Indicator */}
      {hasBegun && currentPage !== Page.Contact && (
        <div className="fixed bottom-12 right-12 hidden md:block z-40">
          <button
            onClick={handleContinueNarrative}
            className="flex items-center space-x-3 text-slate-600 dark:text-gray-500 hover:text-slate-900 dark:hover:text-white transition-colors group"
          >
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em]">Continue Narrative</span>
            <div className="w-12 h-px bg-slate-300 dark:bg-gray-700 group-hover:w-20 group-hover:bg-purple-700 dark:group-hover:bg-purple-500 transition-all"></div>
          </button>
        </div>
      )}

      {/* Subtle Bottom Bar Decoration */}
      <div className="fixed bottom-8 left-8 md:left-24 flex items-center space-x-4 opacity-30 hover:opacity-100 transition-opacity pointer-events-none z-40">
        <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-slate-600 dark:text-slate-500 whitespace-nowrap">DESIGNED TO SCALE. BUILT TO LAST.</span>
      </div>
    </div>
  );
};

export default App;