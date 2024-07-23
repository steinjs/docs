export default function HomePage() {
  return (
    <main className="mx-auto max-w-6xl pt-8 px-4 lg:px-0">
      <section className="w-full overflow-x-hidden">
        <div className="relative flex flex-col lg:items-center z-10">
          <h1 className="text-4xl lg:text-5xl font-bold pt-20 lg:pt-40 mb-6">The best way to build your SolidJS SPA</h1>
          <p className="lg:text-center text-lg max-w-2xl text-gray-600 dark:text-gray-400 mb-10">Stein is a framework based on Vite which aims to provide a better DX for developing SolidJS SPAs. Modular but opinionated to get you started quickly.</p>
          <div className="flex flex-row gap-4 items-center">
            <a href="/docs/core" className="inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none bg-blue-500/60 hover:bg-blue-800/70 bg-gradient-to-tr from-cyan-500/50 to-blue-600 shadow-background/20 text-white/90 h-11 px-6 rounded-full border border-blue-700/70">
              Get Started
            </a>
            <a href="https://github.com/steinjs/stein" className="inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none bg-secondary/60 hover:bg-accent shadow-background/20 h-11 px-6 rounded-full border border-bg-secondary/40">
              View GitHub
            </a>
          </div>
        </div>
        <div className="animate-blob absolute top-52 left-32 size-[500px] rounded-full bg-blue-500/70 filter blur-[150px] opacity-50"></div>
        <div className="animate-blob-2 absolute top-52 right-24 size-[500px] rounded-full bg-violet-500/60 filter blur-[150px] opacity-50"></div>
      </section>
    </main>
  );
}