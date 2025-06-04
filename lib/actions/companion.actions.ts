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

export const getAllCompanions = async ({
  limit = 10,
  page = 1,
  subject,
  topic,
}: GetAllCompanions) => {
  let query = supabase.from("companions").select("*");

  if (subject && topic) {
    query = query
      .ilike("subject", `%${subject}%`)
      .or(`topic.ilike.%${topic}%,name.ilike.%${topic}%`);
  } else if (subject) {
    query = query.ilike("subject", `%${subject}%`);
  } else if (topic) {
    query = query.or(`topic.ilike.%${topic}%,name.ilike.%${topic}%`);
  }

  query = query.range((page - 1) * limit, page * limit - 1);

  const { data: companions, error } = await query;

  if (error) {
    throw new Error(error.message);
  }

  return companions;
};

export const getCompanion = async (id: string) => {
  const { data } = await supabase
    .from("companions")
    .select("*")
    .eq("id", id)
    .limit(1)
    .single()
    .throwOnError();

  return data;
};

export const addToSessionHistory = async (companionId: string) => {
  const { userId } = await auth();

  const { data, error } = await supabase
    .from("session_history")
    .insert({ companion_id: companionId, user_id: userId })
    .select()
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const getRecentSessions = async (limit = 10) => {
  const { data, error } = await supabase
    .from("session_history")
    .select(`companions(*)`)
    .order("created_at", { ascending: false })
    .limit(limit);

  if (error) {
    throw new Error(error.message);
  }

  return data.map(({ companions }) => companions);
};

export const getUserSessions = async (userId: string, limit = 10) => {
  const { data, error } = await supabase
    .from("session_history")
    .select(`companions(*)`)
    .eq("user_id", userId)
    .order("created_at", { ascending: false })
    .limit(limit);

  if (error) {
    throw new Error(error.message);
  }

  return data.map(({ companions }) => companions);
};

export const getUserCompanions = async (userId: string) => {
  const { data, error } = await supabase
    .from("companions")
    .select("*")
    .eq("author", userId);

  if (error) {
    throw new Error(error.message);
  }

  return data;
};
