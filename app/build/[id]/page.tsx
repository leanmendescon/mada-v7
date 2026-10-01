"use client";
import { useSearchParams, useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function BuildPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const prompt = searchParams.get("prompt") || "";
  const [code, setCode] = useState("MADA V7 GERANDO EM MODO DEUS...");

  useEffect(() => {
    if (!prompt) return;
    async function run() {
      const res = await fetch("/api/mada/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt, id: params.id }),
      });
      const data = await res.json();
      setCode(data.code || JSON.stringify(data));
    }
    run();
  }, [prompt, params.id]);

  return (
    <div className="bg-black text-white min-h-screen p-8">
      <h1 className="text-pink-500 text-3xl font-bold">MADA V7 SUPREMA - BUILD {params.id as string}</h1>
      <p className="mt-4 text-sm opacity-70">Prompt: {prompt}</p>
      <pre className="mt-8 whitespace-pre-wrap bg-zinc-900 p-4 rounded">{code}</pre>
    </div>
  );
}
