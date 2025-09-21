"use server";

export async function getTimeStamp() {
  const res = await fetch(`https://worldtimeapi.org/api/timezone/Etc/UTC`, {
    next: { revalidate: 43200 },
    // cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch Pokémon data");
  const data = await res.json();
  return { ...data };
}
