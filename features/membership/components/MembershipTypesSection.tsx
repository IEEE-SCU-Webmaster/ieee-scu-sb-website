import { ArrowRightIcon } from "@heroicons/react/24/solid";

const membershipTypes = [
  {
    title: "Student Member",
    forWho: "For undergraduate students",
    description: "Designed to help you build your technical knowledge, professional network, and future career while studying in an IEEE-designated technical field.",
    bestFor: "Undergraduate students who want to explore technology, build connections, develop skills, and get involved.",
    link: "https://www.ieee.org/membership/join",
    linkText: "Join IEEE as a Student",
    features: [
      "Student communities",
      "Technical events & Conferences",
      "Scholarships & Grants",
      "Competitions & Awards",
      "Mentorship",
    ]
  },
  {
    title: "Graduate Student Member",
    forWho: "For students continuing their academic journey",
    description: "Deepen your technical engagement, connect with researchers and professionals, and discover opportunities related to research and publishing.",
    bestFor: "Graduate students looking for research opportunities, publishing, conferences, and advanced professional development.",
    link: "https://www.ieee.org/membership/join",
    linkText: "Explore Graduate Membership",
    features: [
      "Advanced research access",
      "Publishing opportunities",
      "Professional networking",
      "Specialized conferences",
    ]
  },
  {
    title: "Professional Member",
    forWho: "For engineers and technology professionals",
    description: "Access a global professional community and resources designed to support your continued growth after graduation.",
    bestFor: "Working professionals in technology or engineering fields seeking to advance their careers.",
    link: "https://www.ieee.org/membership/join",
    linkText: "Join IEEE as a Professional",
    features: [
      "Global professional community",
      "Career advancement tools",
      "Leadership opportunities",
      "Technical societies access",
    ]
  }
];

export default function MembershipTypesSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 md:px-8 py-10">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-extrabold sm:text-4xl text-primary mb-4">Choose the Membership That Fits You</h2>
        <p className="text-lg text-slate-700 dark:text-slate-300 max-w-3xl mx-auto">
          Your IEEE journey starts here. Whether you are an undergraduate, graduate, or professional, there is a membership path for you.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {membershipTypes.map((type, index) => (
          <div key={index} className="flex flex-col rounded-3xl border border-border bg-background p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:hover:border-slate-600">
              <h3 className="mb-2 text-2xl font-bold">{type.title}</h3>
              <p className="mb-6 text-sm font-semibold text-primary uppercase tracking-wider">{type.forWho}</p>
              <p className="mb-6 text-slate-700 dark:text-slate-300">{type.description}</p>
              
              <div className="mb-6 flex-grow">
                <p className="font-semibold text-slate-900 dark:text-white mb-3">Best for:</p>
                <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">{type.bestFor}</p>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                  {type.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-2">
                      <span className="text-primary">•</span> {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={type.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-primary text-primary px-6 py-3 font-semibold transition-all duration-300 hover:bg-primary hover:text-white"
              >
                {type.linkText}
                <ArrowRightIcon className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          ))}
        </div>
    </section>
  );
}
