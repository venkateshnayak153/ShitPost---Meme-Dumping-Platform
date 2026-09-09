function App() {
  return (
    <main className="min-h-screen bg-surface-light dark:bg-surface-dark flex flex-col items-center justify-center p-6 text-slate-800 dark:text-slate-100">
      {/* Temporary scaffolding verification block - to be removed once verified */}
      <div className="card p-8 max-w-md w-full text-center space-y-6">
        <h1 className="text-4xl font-extrabold font-display text-brand-500 tracking-tight">
          meme-dump
        </h1>
        <p className="text-slate-600 dark:text-slate-300 font-sans text-sm">
          Scaffolding initialized successfully with custom Tailwind tokens, Redux Toolkit,
          ESLint, Prettier, and Husky.
        </p>
        <div className="flex items-center justify-center gap-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800">
            Upvote: #22c55e
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-rose-100 text-rose-800">
            Downvote: #ef4444
          </span>
        </div>
        <div>
          <button type="button" className="btn-primary w-full">
            Explore Memes
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;
