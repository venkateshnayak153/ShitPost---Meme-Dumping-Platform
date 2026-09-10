import Navbar from './components/shared/Navbar';
import DriftWallHero from './components/hero/DriftWallHero';

function App() {
  return (
    <div className="relative min-h-screen bg-carbon-950 text-carbon-100 selection:bg-cyber-500 selection:text-carbon-950 transition-colors duration-300">
      {/* Dynamic Animated Glassmorphic Navbar */}
      <Navbar sentinelId="hero-sentinel" />

      <main>
        {/* Full-viewport Hero Section (100vw x 100vh) */}
        <DriftWallHero />

        {/* 
          PLACEHOLDER: Explore / Feed Section
          To be built in a separate step as specified in task requirements.
          Includes sufficient scroll height (min-h-[140vh]) to demonstrate 
          the Navbar spring shrink and pill transition when scrolling past the hero.
        */}
        <section
          id="explore"
          className="relative min-h-[140vh] py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center"
        >
          {/* Section Divider & Header */}
          <div className="w-full text-center space-y-4 mb-16 pt-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-medium bg-cyber-500/10 text-cyber-400 border border-cyber-500/30">
              <span className="w-2 h-2 rounded-full bg-cyber-500 animate-pulse" />
              <span>UP_NEXT // EXPLORE_FEED</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display tracking-wider text-white">
              EXPLORE THE MEME VAULT
            </h2>
            <p className="text-carbon-400 max-w-xl mx-auto text-sm sm:text-base font-mono">
              {'//'} Infinite feed, categories, upvoting, downvoting, and meme filtering
              will be built here.
            </p>
          </div>

          {/* Placeholder Grid / Cards to demonstrate scroll depth */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full opacity-80">
            {Array.from({ length: 6 }).map((_, idx) => (
              <div
                key={idx}
                className="p-6 flex flex-col gap-4 border border-dashed border-carbon-700 bg-carbon-900/60 backdrop-blur-sm rounded-2xl animate-pulse"
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                <div className="h-56 w-full rounded-xl bg-carbon-800 flex items-center justify-center text-carbon-400 text-sm font-mono">
                  Meme Feed Item #{idx + 1}
                </div>
                <div className="h-4 bg-carbon-800 rounded w-3/4" />
                <div className="h-3 bg-carbon-800 rounded w-1/2" />
                <div className="flex items-center justify-between pt-3 border-t border-carbon-800 text-xs font-mono text-carbon-500">
                  <span>Feed component slot</span>
                  <span className="text-cyber-500/80">Ready for step 2</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center text-xs font-mono text-carbon-500">
            ▲ Scroll back up to watch the navbar dynamically expand back into the
            full-width hero header.
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
