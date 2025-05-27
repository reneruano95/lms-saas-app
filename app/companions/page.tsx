import CompanionCard from "@/components/companion-card";
import SearchInput from "@/components/search-input";
import SubjectFilter from "@/components/subject-filter";
import { getAllCompanions } from "@/lib/actions/companion.actions";
import { getSubjectColor } from "@/lib/utils";
import React from "react";

const CompanionsLibraryPage = async ({ searchParams }: SearchParams) => {
  const filters = await searchParams;

  const subject = filters.subject ? filters.subject : "";
  const topic = filters.topic ? filters.topic : "";

  const companions = await getAllCompanions({ subject, topic });
  // console.log("Companions:", companions);

  return (
    <main>
      <section className="flex justify-between gap-4 max-sm:flex-col">
        <h1>Companion Library</h1>
        <div className="flex gap-4 items-stretch">
          <SearchInput />
          <SubjectFilter />
        </div>
      </section>
      <section className="companion-grid">
        {companions.map(({ id, name, topic, subject, duration }) => (
          <CompanionCard
            key={id}
            id={id}
            name={name as string}
            topic={topic as string}
            subject={subject as string}
            duration={duration as number}
            color={getSubjectColor(subject as string) || "#f0f0f0"}
          />
        ))}
      </section>
    </main>
  );
};

export default CompanionsLibraryPage;
