import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-24">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-hero-radial" />
      <div className="glass-panel accent-ring w-full max-w-2xl rounded-3xl p-10 text-center sm:p-14">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-accent-secondary">
          404
        </p>
        <h1 className="mt-6 font-display text-4xl font-semibold text-white sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg">
          The page you are looking for does not exist or may have been moved.
        </p>
        <div className="mt-10">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-accent-secondary px-6 py-3 text-sm font-semibold text-slate-950 transition duration-300 hover:scale-[1.02] hover:bg-accent"
          >
            Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}
