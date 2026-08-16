import { GlobeAltIcon, LightBulbIcon, RocketLaunchIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/outline";

const benefits = [
  {
    title: "Connect",
    subtitle: "Beyond Your Campus",
    icon: GlobeAltIcon,
    description: "Your network shouldn't end at your university. Connect with people who share your interests, exchange ideas, and collaborate on projects worldwide.",
    highlight: "Build connections that can last beyond graduation."
  },
  {
    title: "Learn",
    subtitle: "Beyond the Curriculum",
    icon: LightBulbIcon,
    description: "Explore technical knowledge, research, educational resources, and industry insights across a wide range of engineering and technology fields.",
    highlight: "Learn where technology is going, not just what it is."
  },
  {
    title: "Grow",
    subtitle: "Your Professional Future",
    icon: RocketLaunchIcon,
    description: "Develop the skills, knowledge, connections, and experiences that complement your academic journey through certifications and professional programs.",
    highlight: "Start building the professional version of yourself."
  },
  {
    title: "Lead",
    subtitle: "Become Part of Something Global",
    icon: UserGroupIcon,
    description: "Join technical societies and communities, participate in events, and connect with professionals across different countries and disciplines.",
    highlight: "Your next opportunity could be one connection away."
  },
  {
    title: "Discover",
    subtitle: "Real Opportunities",
    icon: AcademicCapIcon,
    description: "Open the door to scholarships, grants, student awards, competitions, conferences, research, publishing opportunities, and mentorship.",
    highlight: "Your membership shouldn't just sit on your profile. Use it."
  }
];

export default function BenefitsSection() {
  return (
    <section id="benefits" className="mx-auto max-w-7xl px-4 md:px-8 py-10 scroll-mt-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-extrabold sm:text-4xl text-primary mb-4">One Membership. A World of Opportunities.</h2>
        <p className="text-lg text-slate-700 dark:text-slate-300 max-w-3xl mx-auto">
          What can you get as an IEEE Student Member? Connect with fellow students, professionals, and mentors. Take part in activities that turn your university experience into something much bigger.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {benefits.map((benefit, index) => (
          <div key={index} className="group relative flex flex-col rounded-3xl border border-border bg-background p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/50 dark:hover:border-primary/50">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
              <benefit.icon className="h-7 w-7" />
            </div>
            <h3 className="mb-2 text-2xl font-bold">{benefit.title}</h3>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              {benefit.subtitle}
            </h4>
            <p className="mb-6 flex-grow text-slate-700 dark:text-slate-300">
              {benefit.description}
            </p>
            <p className="border-t border-border pt-4 text-sm font-bold text-primary dark:text-primary-muted italic">
              {benefit.highlight}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
