import CompanionCard from "@/components/companion-card";
import SearchInput from "@/components/search-input";
import SubjectFilter from "@/components/subject-filter";
import {
  getAllCompanions,
  isBookmarked,
} from "@/lib/actions/companion.actions";
import { getSubjectColor } from "@/lib/utils";
import React from "react";

const CompanionsLibraryPage = async ({ searchParams }: SearchParams) => {
  const filters = await searchParams;

  const subject = filters.subject ? filters.subject : "";
  const topic = filters.topic ? filters.topic : "";

  const companions = await getAllCompanions({ subject, topic });

  return (
    <main>
      <section className="flex justify-between gap-4 max-sm:flex-col min-sm:items-center">
        <h1>Companion Library</h1>
        <div className="flex gap-4 items-stretch">
          <SearchInput />
          <SubjectFilter />
        </div>
      </section>
      <section className="companions-grid">
        {await Promise.all(
          companions.map(async ({ id, name, topic, subject, duration }) => {
            const bookmarked = await isBookmarked(id);

            return (
              <CompanionCard
                key={id}
                id={id}
                name={name!}
                topic={topic!}
                subject={subject!}
                duration={duration!}
                color={getSubjectColor(subject!)}
                bookmarked={bookmarked ? true : false}
              />
            );
          })
        )}
      </section>
    </main>
  );
};

export default CompanionsLibraryPage;
