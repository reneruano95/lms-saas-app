import React from "react";
import CompanionCard from "@/components/companion-card";
import CompanionsList from "@/components/companions-list";
import CallToAction from "@/components/call-to-action";
import {
  getAllCompanions,
  getRecentSessions,
  isBookmarked,
} from "@/lib/actions/companion.actions";
import { getSubjectColor } from "@/lib/utils";

export const dynamic = "force-dynamic";

const Page = async () => {
  const companions = await getAllCompanions({ limit: 3 });
  const recentSessionsCompanions = await getRecentSessions(10);

  const companionsWithBookmarks = await Promise.all(
    companions.map(async ({ id }) => {
      const bookmarked = await isBookmarked(id);
      return {
        id,
        bookmarked,
      };
    })
  );

  return (
    <main>
      <h1 className="text-2xl underline">Popular Companions</h1>
      <section className="home-section">
        {companions.map(({ id, name, topic, subject, duration }) => {
          return (
            <CompanionCard
              key={id}
              id={id}
              name={name!}
              topic={topic!}
              subject={subject!}
              duration={duration!}
              color={getSubjectColor(subject!)}
              bookmarked={
                companionsWithBookmarks.find((c) => c.id === id)?.bookmarked
                  ? true
                  : false
              }
            />
          );
        })}
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
