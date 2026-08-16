export default function WhyIeeeSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 md:px-8">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-8 items-center">
        <div className="space-y-6 lg:col-span-8">
          <h2 className="text-3xl font-extrabold sm:text-4xl text-primary">Why IEEE?</h2>
          <h3 className="text-2xl font-bold sm:text-3xl">Your University Is Your Classroom. <br /> IEEE Is Your Global Network.</h3>
          <p className="text-lg text-slate-700 dark:text-slate-300">
            You can learn technology from books, courses, and lectures. But your growth doesn&apos;t stop there.
            IEEE connects you with a worldwide technical community.
          </p>
          <ul className="grid gap-3 sm:grid-cols-2 text-slate-700 dark:text-slate-300">
            {[
              "Learn from experts and researchers.",
              "Discover latest tech and research.",
              "Meet peers and professionals worldwide.",
              "Attend conferences and events.",
              "Develop leadership skills.",
              "Access learning resources.",
              "Discover scholarships & awards.",
              "Connect with mentors.",
              "Get involved in impactful projects."
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-primary font-bold mt-1">✓</span>
                <span className="whitespace-nowrap sm:whitespace-normal xl:whitespace-nowrap">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="relative rounded-3xl p-8 border border-border flex flex-col justify-center items-center text-center shadow-sm lg:col-span-4 transition-all duration-300 hover:shadow-md hover:border-primary/50">
          <span className="text-6xl md:text-7xl lg:text-8xl font-black text-[#b8860b] dark:text-[#ffd700] transition-colors duration-300">
            500k+
          </span>
          <h4 className="mt-4 text-xl font-bold uppercase tracking-widest text-slate-800 dark:text-slate-200">
            Engineers & Tech Professionals
          </h4>
          <p className="mt-6 text-lg font-medium italic text-slate-700 dark:text-slate-300">
            "IEEE Membership is about turning what you learn into what you can do."
          </p>
        </div>
      </div>
    </section>
  );
}
