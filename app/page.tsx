import React from "react";
import CompanionCard from "@/components/companion-card";
import CompanionsList from "@/components/companions-list";
import CallToAction from "@/components/call-to-action";

const Page = () => {
  return (
    <main>
      <h1 className="text-2xl underline">Popular Companions</h1>
      <section className="home-section">
        <CompanionCard
          id="123"
          name="Neura the Brainy Explorer"
          topic="Neral Network of the Brain"
          subject="neuroscience"
          duration={45}
          color="#ffda6e"
        />
        <CompanionCard
          id="456"
          name="Countsy the Math Wizard"
          topic="Derivates and Integrals"
          subject="maths"
          duration={30}
          color="#e5d0ff"
        />

        <CompanionCard
          id="789"
          name="Verba the Vocabulary Builder"
          topic="English Literature"
          subject="language"
          duration={30}
          color="#bde7ff"
        />
      </section>
      <section className="home-section">
        <CompanionsList />
        <CallToAction />
      </section>
    </main>
  );
};

export default Page;
