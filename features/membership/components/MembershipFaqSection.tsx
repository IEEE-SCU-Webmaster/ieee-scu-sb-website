import Accordion from "@/components/ui/Accordion";
import Link from "next/link";

export default function MembershipFaqSection() {
  const faqItems = [
    {
      question: "Who can become an IEEE Student Member?",
      answer: (
        <div className="space-y-2">
          <p>
            Students may qualify for Student or Graduate Student Membership if they meet IEEE's requirements, including being enrolled in an eligible field of study and meeting the required academic workload criteria.
          </p>
          <a
            href="https://www.ieee.org/membership/join"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-semibold hover:underline inline-block mt-2"
          >
            Check IEEE Eligibility Requirements
          </a>
        </div>
      )
    },
    {
      question: "Can Computer Science students join IEEE?",
      answer: (
        <p>
          Yes. Computer Science and Information Technology are among the fields recognized by IEEE for professional membership, and eligible students in these areas can apply for Student Membership.
        </p>
      )
    },
    {
      question: "Do I have to be an engineering student?",
      answer: (
        <p>
          No. IEEE serves a broad technical community that includes fields such as engineering, computer science, information technology, physical sciences, biological and medical sciences, mathematics, technical communications, education, management, and other related areas.
        </p>
      )
    },
    {
      question: "Does joining an IEEE Student Branch automatically make me an IEEE Member?",
      answer: (
        <div className="space-y-2">
          <p>
            <strong>No.</strong> Being involved in an IEEE Student Branch and holding official IEEE Membership are related but distinct.
          </p>
          <p>
            You can participate in Branch activities according to the opportunities available through your local Branch, while official IEEE Membership is obtained through IEEE's membership system.
          </p>
        </div>
      )
    },
    {
      question: "Does the Branch collect my IEEE membership fee?",
      answer: (
        <p>
          No. Official IEEE Membership registration and payment are handled through IEEE. Our Student Branch can help you understand the membership, discover opportunities, and get involved in the IEEE community at your university.
        </p>
      )
    },
    {
      question: "How much does IEEE Membership cost?",
      answer: (
        <p>
          Membership dues vary based on factors such as your country and career phase. For the most accurate and current amount, use IEEE's official membership fee information.
        </p>
      )
    },
    {
      question: "Can I renew my IEEE Membership?",
      answer: (
        <div className="space-y-2">
          <p>Yes. Existing members can renew their membership through the official IEEE membership system.</p>
          <a
            href="https://www.ieee.org/membership/renew.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-semibold hover:underline inline-block mt-2"
          >
            Renew IEEE Membership
          </a>
        </div>
      )
    },
    {
      question: "What happens after I join?",
      answer: (
        <p>
          That's when the real journey begins. Explore IEEE communities, technical societies, events, learning resources, conferences, scholarships, competitions, and other opportunities — then connect with your local IEEE Student Branch and start getting involved.
        </p>
      )
    }
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 md:px-8 py-10">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold sm:text-4xl text-primary mb-4">Frequently Asked Questions</h2>
        <p className="text-lg text-slate-700 dark:text-slate-300">
          Everything you need to know about IEEE membership.
        </p>
      </div>
      
      <Accordion items={faqItems} />
    </section>
  );
}
