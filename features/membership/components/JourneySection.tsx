import { CheckCircleIcon } from "@heroicons/react/24/solid";

export default function JourneySection() {
  const steps = [
    { title: "Student", desc: "Start your journey and discover your passion." },
    { title: "Graduate Student", desc: "Deepen your knowledge and research." },
    { title: "Professional", desc: "Build your career and network." },
    { title: "Senior Member", desc: "Gain recognition for your achievements." },
    { title: "Fellow", desc: "Achieve the highest grade of membership." },
  ];

  return (
    <section className="mx-auto max-w-5xl px-4 md:px-8 py-10">
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-3xl font-extrabold sm:text-4xl">Your Membership Can Grow With You</h2>
        <h3 className="text-xl font-bold text-primary">From Student to Professional</h3>
        <p className="text-lg text-slate-700 dark:text-slate-300 max-w-2xl mx-auto">
          Your IEEE journey doesn't have to end when you graduate. As your academic and professional journey evolves, your relationship with IEEE can evolve with it.
        </p>
      </div>

      <div className="relative py-8">
        <div className="grid gap-8 md:grid-cols-5 relative z-10">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-row md:flex-col items-center gap-4 text-center">
              <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary z-10 md:mb-4">
                <span className="font-bold">{index + 1}</span>
              </div>
              <div className="text-left md:text-center">
                <h4 className="font-bold text-lg leading-tight mb-1">{step.title}</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 hidden md:block">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-16 text-center">
        <p className="text-2xl font-black italic text-slate-300 dark:text-slate-700 uppercase">
          Start early. Build your journey. Keep growing.
        </p>
      </div>
    </section>
  );
}
