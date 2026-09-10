import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = ({ sentinelId = 'hero-sentinel', onLoginClick }) => {
  const [isScrolledPastHero, setIsScrolledPastHero] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    if (typeof document !== 'undefined') {
      return document.documentElement.classList.contains('dark');
    }
    return true;
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [windowWidth, setWindowWidth] = useState(() =>
    typeof window !== 'undefined' ? window.innerWidth : 1200
  );

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsLoginModalOpen(false);
    };
    if (isLoginModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLoginModalOpen]);

  // Track window resize for responsive width calculations
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Synchronize dark theme toggle
  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (nextDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  // Scroll and Sentinel Observer to detect scrolling past hero section
  useEffect(() => {
    let observer;

    const checkScrollState = () => {
      const sentinel = document.getElementById(sentinelId);
      if (sentinel) {
        const rect = sentinel.getBoundingClientRect();
        // Trigger pill shrink when sentinel reaches top area or user scrolled past hero
        const isPast = rect.top <= 120 || window.scrollY > window.innerHeight * 0.75;
        setIsScrolledPastHero(isPast);
      } else {
        setIsScrolledPastHero(window.scrollY > window.innerHeight * 0.75);
      }
    };

    const sentinel = document.getElementById(sentinelId);
    if (sentinel && 'IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          if (entry) {
            const isPast = !entry.isIntersecting && entry.boundingClientRect.top <= 120;
            setIsScrolledPastHero(isPast || window.scrollY > window.innerHeight * 0.75);
          }
        },
        {
          root: null,
          threshold: [0, 1],
          rootMargin: '-80px 0px 0px 0px',
        }
      );
      observer.observe(sentinel);
    }

    // Backup passive scroll listener for instantaneous response
    window.addEventListener('scroll', checkScrollState, { passive: true });
    checkScrollState();

    return () => {
      if (observer) observer.disconnect();
      window.removeEventListener('scroll', checkScrollState);
    };
  }, [sentinelId]);

  // Handle Logo click -> smooth scroll to top
  const handleLogoClick = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isMobile = windowWidth < 640;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <motion.nav
        className="pointer-events-auto relative flex items-center justify-between px-4 sm:px-6 md:px-8 py-3 text-white backdrop-blur-xl border shadow-2xl overflow-hidden"
        initial={false}
        animate={{
          width: isScrolledPastHero ? (isMobile ? '92%' : '65%') : '100%',
          maxWidth: isScrolledPastHero ? '920px' : '100%',
          borderRadius: isScrolledPastHero ? 9999 : 0,
          y: isScrolledPastHero ? 14 : 0,
          backgroundColor: isScrolledPastHero
            ? 'rgba(14, 14, 14, 0.90)'
            : 'rgba(14, 14, 14, 0.45)',
          borderColor: isScrolledPastHero
            ? 'rgba(226, 183, 20, 0.38)'
            : 'rgba(255, 255, 255, 0.10)',
          boxShadow: isScrolledPastHero
            ? '0 20px 50px -10px rgba(0, 0, 0, 0.9), 0 0 24px rgba(226, 183, 20, 0.20)'
            : '0 4px 20px rgba(0, 0, 0, 0.4)',
        }}
        transition={{
          type: 'spring',
          stiffness: 240,
          damping: 26,
          mass: 0.8,
        }}
        role="navigation"
        aria-label="Main Navigation"
      >
        {/* Subtle internal scrim for guaranteed text contrast */}
        <div className="absolute inset-0 rounded-[inherit] bg-gradient-to-r from-black/40 via-transparent to-black/40 pointer-events-none" />

        {/* Brand / Logo */}
        <div className="relative z-10 flex items-center gap-3">
          <a
            href="#"
            onClick={handleLogoClick}
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-cyber-500 rounded-full"
          >
            <div className="h-9 w-9 rounded-xl bg-cyber-500 text-carbon-950 flex items-center justify-center font-display text-xl font-bold shadow-[0_0_16px_rgba(226,183,20,0.5)] group-hover:scale-110 group-hover:rotate-6 transition-transform select-none">
              ⚡
            </div>
            <div className="flex items-center">
              <span className="font-display text-2xl sm:text-3xl tracking-wider text-white group-hover:text-cyber-400 transition-colors drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
                SHITPOST<span className="text-cyber-500">.EXE</span>
              </span>
            </div>
          </a>
        </div>

        {/* Center / Search Bar */}
        <div className="relative z-10 flex-1 max-w-xs sm:max-w-sm md:max-w-md mx-3 sm:mx-6">
          <div className="relative flex items-center">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search 10,000+ shitposts..."
              className="w-full pl-10 pr-10 py-2 text-xs sm:text-sm rounded-full bg-carbon-800/90 hover:bg-carbon-800 focus:bg-carbon-850 text-carbon-100 placeholder-carbon-500 border border-carbon-700/80 focus:border-cyber-500 focus:outline-none focus:ring-2 focus:ring-cyber-500/25 backdrop-blur-md shadow-inner transition-colors duration-150 font-sans"
            />
            <svg
              className="w-4 h-4 text-cyber-500 absolute left-3.5 pointer-events-none"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 text-carbon-400 hover:text-cyber-400 text-xs font-semibold p-1"
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Right Actions: Login, Upload & Theme Toggle */}
        <div className="relative z-10 flex items-center gap-1.5 sm:gap-2.5">
          {/* Login Button */}
          <button
            type="button"
            onClick={() => {
              if (onLoginClick) {
                onLoginClick();
              } else {
                setIsLoginModalOpen(true);
              }
            }}
            className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-2 text-xs sm:text-sm font-display tracking-wider rounded-full text-cyber-400 hover:text-white bg-carbon-800/80 hover:bg-carbon-700 active:bg-carbon-600 border border-cyber-500/40 hover:border-cyber-400 shadow-sm hover:shadow-[0_0_15px_rgba(226,183,20,0.2)] hover:scale-105 active:scale-95 transition-all duration-150 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-cyber-500"
            aria-label="Login"
          >
            <svg
              className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.2]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
            <span>LOGIN</span>
          </button>

          {/* Upload Button */}
          <button
            type="button"
            onClick={() => {
              const uploadTarget =
                document.getElementById('upload') || document.getElementById('explore');
              if (uploadTarget) uploadTarget.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-1.5 px-3.5 sm:px-5 py-2 text-xs sm:text-sm font-display tracking-wider rounded-full text-carbon-950 bg-cyber-500 hover:bg-cyber-400 active:bg-cyber-600 shadow-[0_0_20px_rgba(226,183,20,0.35)] hover:shadow-[0_0_25px_rgba(226,183,20,0.55)] hover:scale-105 active:scale-95 transition-all duration-150 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-cyber-500"
          >
            <svg
              className="w-4 h-4 stroke-[2.5]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
            <span>UPLOAD</span>
          </button>

          {/* Theme Toggle Icon Button */}
          <button
            type="button"
            onClick={toggleTheme}
            className="p-2 sm:p-2.5 rounded-full bg-carbon-800/80 hover:bg-carbon-700 active:bg-carbon-600 border border-carbon-700 text-cyber-500 hover:text-cyber-400 transition-all duration-150 hover:scale-105 active:scale-95 shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-cyber-500 cursor-pointer"
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? (
              // Sun icon in cyber yellow
              <svg
                className="w-4 h-4 text-cyber-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              // Moon icon in carbon muted
              <svg
                className="w-4 h-4 text-carbon-100"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>
        </div>
      </motion.nav>

      {/* Login Modal in Monkeytype Black & Cyber Yellow */}
      {isLoginModalOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md pointer-events-auto"
          onClick={() => setIsLoginModalOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="login-modal-title"
        >
          <div
            className="relative w-full max-w-md bg-carbon-900 border border-carbon-700/90 rounded-3xl p-6 sm:p-8 shadow-[0_0_50px_rgba(0,0,0,0.9),0_0_25px_rgba(226,183,20,0.2)] text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setIsLoginModalOpen(false)}
              className="absolute top-5 right-5 text-carbon-400 hover:text-white p-1.5 rounded-full hover:bg-carbon-800 transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <svg
                className="w-5 h-5 stroke-[2]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-xl bg-cyber-500 text-carbon-950 flex items-center justify-center font-display text-2xl font-bold shadow-[0_0_16px_rgba(226,183,20,0.5)]">
                ⚡
              </div>
              <div>
                <h3
                  id="login-modal-title"
                  className="text-xl sm:text-2xl font-display tracking-wider text-white"
                >
                  SHITPOST<span className="text-cyber-500">.EXE</span> LOGIN
                </h3>
                <p className="text-xs font-mono text-carbon-400">
                  {'//'} Sign in to post, upvote &amp; bookmark dank memes
                </p>
              </div>
            </div>

            {/* Login Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setIsLoginModalOpen(false);
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-carbon-300 mb-1.5">
                  Email or Username
                </label>
                <input
                  type="text"
                  placeholder="babu.rao@shitpost.exe"
                  className="w-full px-4 py-2.5 rounded-xl bg-carbon-800/90 text-white placeholder-carbon-500 border border-carbon-700 focus:border-cyber-500 focus:outline-none focus:ring-2 focus:ring-cyber-500/25 text-sm font-sans"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-carbon-300 mb-1.5">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="••••••••••••"
                  className="w-full px-4 py-2.5 rounded-xl bg-carbon-800/90 text-white placeholder-carbon-500 border border-carbon-700 focus:border-cyber-500 focus:outline-none focus:ring-2 focus:ring-cyber-500/25 text-sm font-sans"
                  required
                />
              </div>

              <div className="flex items-center justify-between text-xs font-mono pt-1">
                <label className="flex items-center gap-2 text-carbon-400 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="accent-cyber-500 rounded bg-carbon-800 border-carbon-700"
                  />
                  <span>Remember me</span>
                </label>
                <a
                  href="#forgot"
                  className="text-cyber-400 hover:text-cyber-300 transition-colors"
                >
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full mt-2 py-3 rounded-xl font-display tracking-wider text-base font-bold text-carbon-950 bg-cyber-500 hover:bg-cyber-400 active:bg-cyber-600 shadow-[0_0_20px_rgba(226,183,20,0.35)] hover:shadow-[0_0_28px_rgba(226,183,20,0.55)] transition-all duration-150 cursor-pointer flex items-center justify-center gap-2"
              >
                <span>SIGN IN</span>
                <span className="text-lg">→</span>
              </button>
            </form>

            {/* Modal Footer */}
            <div className="mt-6 pt-4 border-t border-carbon-800 text-center text-xs font-mono text-carbon-400">
              Don&apos;t have an account?{' '}
              <button
                type="button"
                className="text-cyber-400 hover:underline font-semibold cursor-pointer"
              >
                Register here
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
