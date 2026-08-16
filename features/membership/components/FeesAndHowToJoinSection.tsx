import { CurrencyDollarIcon, HandRaisedIcon } from "@heroicons/react/24/outline";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

export default function FeesAndHowToJoinSection() {
  const steps = [
    { title: "Choose Your Membership", desc: "Select the membership type that matches your current academic or professional stage." },
    { title: "Check Your Eligibility & Dues", desc: "IEEE determines membership eligibility and annual dues based on factors such as your career phase and country." },
    { title: "Join Through IEEE", desc: "Membership registration and payment are completed through the official IEEE website." },
    { title: "Start Exploring", desc: "Once you're a member, explore IEEE communities, events, learning resources, and technical societies." },
    { title: "Get Involved", desc: "Connect with your local IEEE Student Branch, participate in activities, and make your membership count." },
  ];

  return (
    <section className="mx-auto max-w-6xl px-4 md:px-8 py-10 space-y-16">
      
      {/* Fees */}
      <div className="grid gap-12 lg:grid-cols-2 items-center bg-slate-50 dark:bg-slate-900/50 rounded-3xl p-8 md:p-12 border border-border">
        <div className="space-y-6">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 mb-2">
            <CurrencyDollarIcon className="h-6 w-6" />
          </div>
          <h2 className="text-3xl font-extrabold sm:text-4xl">How Much Does IEEE Membership Cost?</h2>
          <p className="text-lg text-slate-700 dark:text-slate-300">
            IEEE membership dues vary depending on your country or region, career phase, membership grade, and eligibility for applicable discounts or special programs.
          </p>
          <div className="bg-background border-l-4 border-yellow-500 p-4 rounded-r-xl shadow-sm">
            <p className="text-sm font-medium">
              <strong>Important:</strong> IEEE Membership fees and eligibility requirements are determined by IEEE and may change. Please use the official IEEE membership page for the most up-to-date information.
            </p>
          </div>
          <a
            href="https://www.ieee.org/membership/join"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary bg-primary inline-flex text-white mt-4"
          >
            <span className="z-10 flex items-center gap-2">
              Check Current Membership Fees <ArrowRightIcon className="size-4" />
            </span>
          </a>
        </div>
        
        <div className="space-y-6">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-primary dark:bg-blue-900/30 mb-2">
            <HandRaisedIcon className="h-6 w-6" />
          </div>
          <h2 className="text-2xl font-bold sm:text-3xl">Special Opportunities for Students</h2>
          <p className="text-slate-700 dark:text-slate-300">
            Depending on your eligibility and available programs, you may discover:
          </p>
          <ul className="space-y-3">
            {[
              "Scholarships & Grants for financial support",
              "Competitions & Awards for recognition",
              "Conferences & Events for networking",
              "Mentorship from experienced professionals",
              "Student Branch Activities for real experiences"
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm md:text-base font-medium">
                <span className="text-primary mt-1">•</span> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* How to join steps */}
      <div>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold sm:text-4xl text-primary mb-4">How to Become an IEEE Member</h2>
          <p className="text-lg text-slate-700 dark:text-slate-300">It's Simple.</p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-5">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col relative">
              <div className="text-5xl font-black text-slate-200 dark:text-slate-800 mb-2">
                0{index + 1}
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
}
