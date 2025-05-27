import CompanionForm from "@/components/companion-form";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

const NewCompanionPage = async () => {
  const { userId } = await auth();

  if (!userId) {
    return redirect("/sign-in");
  }

  return (
    <main className="min-xl:w-1/3 min-lg:w-1/2  min-md:w-2/3 items-center justify-center">
      <article className="w-full gap-4 flex flex-col">
        <h1>Companion Builder</h1>
        <CompanionForm />
      </article>
    </main>
  );
};

export default NewCompanionPage;
