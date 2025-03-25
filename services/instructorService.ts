import supabase from "./supabase";

export async function getInstructors() {
  const { data, error } = await supabase.from("trainer").select("*");
  if (error) {
    throw new Error(error.message);
  }
  return data;
}
