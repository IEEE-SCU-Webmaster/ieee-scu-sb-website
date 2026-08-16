import { ArrowRightIcon } from "@heroicons/react/24/solid";

export default function SocietiesAndCollabratecSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 md:px-8 py-10 space-y-16">
      {/* Societies */}
      <div className="grid gap-12 lg:grid-cols-2 items-center">
        <div className="order-2 lg:order-1 rounded-3xl bg-slate-100 dark:bg-slate-800/50 p-8 grid grid-cols-2 gap-4 border border-border">
          {[
            "Computer Science", "Artificial Intelligence", 
            "Robotics", "Communications", 
            "Electronics", "Power & Energy", 
            "Aerospace", "Biomedical Engineering",
            "Software", "Education"
          ].map((soc, idx) => (
            <div key={idx} className="bg-background rounded-xl p-4 shadow-sm border border-border text-center text-sm font-semibold flex items-center justify-center min-h-[80px]">
              {soc}
            </div>
          ))}
        </div>
        
        <div className="order-1 lg:order-2 space-y-6">
          <h2 className="text-2xl font-semibold text-primary uppercase tracking-widest text-sm">More Than IEEE Membership</h2>
          <h3 className="text-3xl font-extrabold sm:text-4xl">Join the Community. <br/> Find Your Technical Home.</h3>
          <p className="text-lg text-slate-700 dark:text-slate-300">
            IEEE is made up of specialized Societies and Technical Communities, allowing members to connect with people who share their technical interests. 
            Find the community that speaks your language.
          </p>
          <a
            href="https://www.ieee.org/communities/societies/index.html"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-primary font-bold text-lg hover:underline"
          >
            Explore IEEE Societies & Communities
            <ArrowRightIcon className="size-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>

      {/* Collabratec */}
      <div className="relative rounded-3xl bg-slate-50 dark:bg-slate-900/50 border border-border overflow-hidden">
        <div className="relative p-8 md:p-16 lg:w-2/3 space-y-6">
          <h2 className="text-4xl font-black text-slate-900 dark:text-white">IEEE Collabratec®</h2>
          <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200">Your Professional Network, Beyond Social Media.</h3>
          <p className="text-lg text-slate-700 dark:text-slate-300">
            IEEE Collabratec® gives IEEE members another way to connect, collaborate, and build professional relationships around technical interests. Discover people, communities, resources, and collaboration opportunities — all within the IEEE ecosystem.
          </p>
          <div className="pt-4">
            <a
              href="https://ieee-collabratec.ieee.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-full font-bold transition hover:bg-primary-muted hover:scale-105"
            >
              Explore IEEE Collabratec®
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
