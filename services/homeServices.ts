import supabase from "./supabase";

export async function getAnnouncements() {
  const { data, error } = await supabase.from("announcement").select("*");
  if (error) {
    throw new Error(error.message);
  }
  return data
}

export async function getHomeCards() {
  const { data, error } = await supabase.from("home_cards").select("*");
  if (error) {
    throw new Error(error.message);
  }
  return data
}
