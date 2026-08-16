import { ArrowRightIcon } from "@heroicons/react/24/solid";

export default function FinalCtaSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 md:px-8 py-10">
      <div className="relative rounded-3xl bg-slate-900 text-white overflow-hidden p-8 md:p-16 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/40 via-slate-900 to-slate-900"></div>
        
        <div className="relative z-10 space-y-8 max-w-3xl mx-auto">
          <h2 className="text-sm font-bold uppercase tracking-widest text-primary-muted">Ready to Take the Next Step?</h2>
          <h3 className="text-4xl font-black md:text-5xl">Your Future Doesn't Start After Graduation.</h3>
          <p className="text-2xl font-semibold italic text-slate-300">
            It starts with what you do today.
          </p>
          
          <p className="text-lg text-slate-400">
            Join a global community of people who are learning, building, researching, leading, and shaping the future of technology.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm font-bold uppercase tracking-wider text-slate-300 py-4">
            <span>500,000+ Members</span>
            <span className="hidden sm:inline">•</span>
            <span>One Global Community</span>
            <span className="hidden sm:inline">•</span>
            <span>Countless Opportunities</span>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <a
              href="https://www.ieee.org/membership/join"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold transition hover:bg-primary-muted hover:scale-105"
            >
              JOIN IEEE
            </a>
            <a
              href="https://www.ieee.org/membership/join"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-slate-600 text-white px-8 py-4 rounded-full font-bold transition hover:bg-slate-800"
            >
              CHECK MEMBERSHIP FEES
            </a>
          </div>
        </div>
      </div>

      <div className="mt-16 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 md:p-8 text-sm text-slate-600 dark:text-slate-400">
        <h4 className="font-bold text-slate-900 dark:text-slate-200 mb-2">A Note from Your IEEE Student Branch</h4>
        <p className="mb-2">
          <strong>IEEE Membership is managed by IEEE.</strong> Our Branch does not process official IEEE membership payments or determine membership eligibility or dues.
        </p>
        <p className="mb-2">
          We are here to help you understand the opportunities available through IEEE, connect you with the local IEEE community, and make the most of your membership experience.
        </p>
        <p>
          For official membership requirements, fees, registration, renewal, and account-related matters, always refer to the official <a href="https://www.ieee.org/membership/join" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">IEEE website</a>.
        </p>
      </div>
    </section>
  );
}
