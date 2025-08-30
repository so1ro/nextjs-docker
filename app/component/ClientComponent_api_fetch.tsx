"use client";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function ClientComponentApiFetch() {
  const { data, error } = useSWR("/api/get-pokemon-data?id=3", fetcher);

  if (error) return <div>Error</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>{data.name}</h1>
      {/* 他のデータ表示 */}
    </div>
  );
}
