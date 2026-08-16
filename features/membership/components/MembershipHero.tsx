import { ArrowRightIcon } from "@heroicons/react/24/solid";

export default function MembershipHero() {
  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden p-8 text-center md:p-12 animate-fade-in">
      <div className="z-10 mx-auto max-w-4xl space-y-8">
        <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl flex flex-col justify-center">
          <span>Don't Just Study Technology.</span>
          <span className="text-primary mt-2">Become Part of the Community Shaping It.</span>
        </h1>
        
        <div className="space-y-8">
          <p className="mx-auto max-w-2xl text-base text-slate-700 sm:text-lg md:text-xl dark:text-slate-300">
            Join IEEE and take your first step into a global community of engineers, researchers, innovators, and technology leaders.
            Whether you&apos;re a Computer Science student, an engineer, a researcher, or a technology enthusiast, IEEE Membership gives you more than a membership card.
          </p>
          <p className="mx-auto max-w-2xl text-lg font-bold text-slate-900 md:text-xl dark:text-white">
            It gives you access. Knowledge. Connections. Opportunities.
          </p>
          
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row pt-4">
            <a
              href="https://www.ieee.org/membership/join"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary bg-primary w-full text-white sm:w-auto px-8 py-3 text-sm sm:text-base transition-all duration-300 hover:scale-105"
            >
              <span className="z-10 flex items-center gap-2">
                Join IEEE <ArrowRightIcon className="size-4" />
              </span>
            </a>
            <a
              href="#benefits"
              className="w-full sm:w-auto px-8 py-3 text-sm sm:text-base font-semibold tracking-wider uppercase transition-all duration-300 hover:text-primary dark:hover:text-primary-muted border border-border rounded-3xl hover:border-primary"
            >
              Explore Benefits
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
