"use client";
import { useSearchParams, useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function BuildPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const prompt = searchParams.get("prompt") || "";
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!prompt) return;
    async function run() {
      setLoading(true);
      const res = await fetch("/api/mada/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt, message: prompt, id: params.id }),
      });
      const data = await res.json();
      setCode(data.code || "");
      setLoading(false);
    }
    run();
  }, [prompt, params.id]);

  // Cria HTML lindo pro preview
  const htmlPreview = `
  <html>
    <head><script src="https://cdn.tailwindcss.com"></script></head>
    <body class="bg-[#0a0a0a] text-white">
      <div class="p-10">
        <h1 class="text-6xl font-black text-[#ff006a]">BURGER HOUSE 🍔</h1>
        <p class="text-2xl mt-4 opacity-80">${prompt}</p>
        <div class="grid grid-cols-2 gap-6 mt-10">
          <div class="border border-zinc-800 p-6 rounded-2xl bg-zinc-900">
            <h2 class="text-xl font-bold">X-Salada Supremo - R$ 32</h2>
            <p class="opacity-60 mt-2">Pão brioche, blend 180g, queijo e salada</p>
          </div>
          <div class="border border-zinc-800 p-6 rounded-2xl bg-zinc-900">
            <h2 class="text-xl font-bold">X-Bacon Duplo - R$ 45</h2>
            <p class="opacity-60 mt-2">2x blend 180g, bacon crocante, cheddar</p>
          </div>
        </div>
        <button class="mt-10 bg-[#ff006a] text-white px-10 py-5 rounded-xl text-xl font-bold">PEDIR NO WHATSAPP</button>
        <div class="mt-20 p-4 bg-zinc-900 rounded text-xs opacity-50 overflow-auto">${code}</div>
      </div>
    </body>
  </html>`;

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <div className="p-4 border-b border-zinc-800 flex justify-between items-center">
        <h1 className="text-[#ff00ff] font-bold">MADA V7 SUPREMA - BUILD {params?.id as string}</h1>
        <span className="text-xs opacity-50">{prompt}</span>
      </div>
      <div className="flex flex-1">
        {/* CODE */}
        <div className="w-1/2 p-4 bg-zinc-950 overflow-auto border-r border-zinc-800">
          <p className="text-xs opacity-50 mb-2">CÓDIGO GERADO:</p>
          <pre className="text-xs whitespace-pre-wrap">{loading? "GERANDO..." : code}</pre>
        </div>
        {/* PREVIEW */}
        <div className="w-1/2 bg-white">
          {loading? (
            <div className="h-full flex items-center justify-center text-black">MADA GERANDO EM MODO DEUS... 🍔</div>
          ) : (
            <iframe srcDoc={htmlPreview} className="w-full h-full min-h-[80vh] border-0" />
          )}
        </div>
      </div>
    </div>
  );
}
