import { getPokemonData } from "../../lib/get_pokemon_data";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = Number(searchParams.get("id"));
  if (!id) {
    return Response.json({ error: "Missing or invalid id" }, { status: 400 });
  }
  const data = await getPokemonData(id);
  return Response.json(data);
}
