import React from "react";
import CompanionCard from "@/components/companion-card";
import CompanionsList from "@/components/companions-list";
import CallToAction from "@/components/call-to-action";
import {
  getAllCompanions,
  getRecentSessions,
} from "@/lib/actions/companion.actions";
import { getSubjectColor } from "@/lib/utils";

const Page = async () => {
  const companions = await getAllCompanions({ limit: 3 });
  const recentSessionsCompanions = await getRecentSessions(10);

  return (
    <main>
      <h1 className="text-2xl underline">Popular Companions</h1>
      <section className="home-section">
        {companions.map((companion) => (
          <CompanionCard
            key={companion.id}
            id={companion.id}
            name={companion.name!}
            topic={companion.topic!}
            subject={companion.subject!}
            duration={companion.duration!}
            color={getSubjectColor(companion.subject!)}
          />
        ))}
      </section>
      <section className="home-section">
        <CompanionsList
          title="Recently Completed Sessions"
          companions={recentSessionsCompanions}
          classNames="w-2/3 max-lg:w-full"
        />
        <CallToAction />
      </section>
    </main>
  );
};

export default Page;
