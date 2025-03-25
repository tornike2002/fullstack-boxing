import supabase from "./supabase";

export async function getContact() {
  const { data, error } = await supabase.from("contact").select("*");
  if (error) {
    throw new Error(error.message);
  }
  return data;
}