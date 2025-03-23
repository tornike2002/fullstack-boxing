import supabase from "./supabase";

export async function getAnnouncements() {
  const { data, error } = await supabase.from("announcement").select("*");
  if (error) {
    throw new Error(error.message);
  }
  return { data, error };
}
