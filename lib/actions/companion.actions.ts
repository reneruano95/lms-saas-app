"use server";

import { auth } from "@clerk/nextjs/server";
import { createSupabaseClient } from "../supabase/client";

const supabase = createSupabaseClient();

export const createCompanion = async (formData: CreateCompanion) => {
  const { userId: author } = await auth();

  const { data, error } = await supabase
    .from("companions")
    .insert({ ...formData, author })
    .select();

  if (!data || error) {
    throw new Error(error?.message || "Failed to create companion");
  }

  return data[0];
};
