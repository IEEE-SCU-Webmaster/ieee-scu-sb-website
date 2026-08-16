import { Metadata } from "next";
import Header from "@/components/layout/Header";
import MembershipHero from "@/features/membership/components/MembershipHero";
import WhyIeeeSection from "@/features/membership/components/WhyIeeeSection";
import BenefitsSection from "@/features/membership/components/BenefitsSection";
import MembershipTypesSection from "@/features/membership/components/MembershipTypesSection";
import SocietiesAndCollabratecSection from "@/features/membership/components/SocietiesAndCollabratecSection";
import JourneySection from "@/features/membership/components/JourneySection";
import FeesAndHowToJoinSection from "@/features/membership/components/FeesAndHowToJoinSection";
import MembershipFaqSection from "@/features/membership/components/MembershipFaqSection";
import FinalCtaSection from "@/features/membership/components/FinalCtaSection";

export const metadata: Metadata = {
  title: "IEEE Membership | IEEE SCU SB",
  description: "Don't Just Study Technology. Become Part of the Community Shaping It. Join IEEE and take your first step into a global community of engineers.",
};

export default function Membership() {
  return (
    <>
      <Header title="IEEE Membership" />
      <main>
        <MembershipHero />
        <WhyIeeeSection />
        <BenefitsSection />
        <MembershipTypesSection />
        <SocietiesAndCollabratecSection />
        <JourneySection />
        <FeesAndHowToJoinSection />
        <MembershipFaqSection />
        <FinalCtaSection />
      </main>
    </>
  );
}
