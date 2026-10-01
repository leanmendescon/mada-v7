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

  const htmlPreview = `
  <!DOCTYPE html>
  <html>
  <head>
    <script src="https://cdn.tailwindcss.com"></script>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  </head>
  <body class="bg-black text-white antialiased">
    <div class="max-w-5xl mx-auto p-8 md:p-16">
      <div class="mb-2 text-sm tracking-widest text-zinc-500">MADA V7 SUPREMA</div>
      <h1 class="text-6xl md:text-8xl font-black text-white leading-none">BURGER<br><span class="text-[#ff0055]">HOUSE</span> 🍔</h1>
      <p class="text-xl md:text-2xl mt-6 text-zinc-400 max-w-xl">${prompt} - A melhor hamburgueria artesanal da cidade. Blend 180g, pão brioche e muito sabor.</p>

      <div class="grid md:grid-cols-2 gap-6 mt-16">
        <div class="bg-zinc-900 border border-zinc-800 p-8 rounded-[24px]">
          <div class="text-5xl mb-4">🍔</div>
          <h2 class="text-2xl font-bold">X-Salada Supremo</h2>
          <p class="text-zinc-400 mt-2">Pão brioche, blend 180g, queijo cheddar, alface e tomate</p>
          <div class="mt-6 flex justify-between items-center"><span class="text-2xl font-bold">R$ 32</span><span class="text-xs bg-white text-black px-3 py-1 rounded-full">MAIS PEDIDO</span></div>
        </div>
        <div class="bg-zinc-900 border border-zinc-800 p-8 rounded-[24px]">
          <div class="text-5xl mb-4">🥓</div>
          <h2 class="text-2xl font-bold">X-Bacon Duplo</h2>
          <p class="text-zinc-400 mt-2">2x blend 180g, bacon crocante, cheddar duplo e molho especial</p>
          <div class="mt-6 flex justify-between items-center"><span class="text-2xl font-bold">R$ 45</span><span class="text-xs bg-[#ff0055] text-white px-3 py-1 rounded-full">NOVO</span></div>
        </div>
      </div>

      <button class="mt-12 w-full md:w-auto bg-[#ff0055] hover:bg-[#ff0055]/90 text-white px-12 py-6 rounded-full text-xl font-black tracking-wide">PEDIR NO WHATSAPP →</button>

      <div class="mt-20 text-xs text-zinc-600">Gerado por MADA V7 - Build ${params.id}</div>
    </div>
  </body>
  </html>`;

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col">
      <div className="h-14 border-b border-zinc-800 flex items-center justify-between px-6 bg-black">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="font-mono text-sm">MADA V7 - BUILD {params?.id as string}</span>
        </div>
        <span className="text-xs bg-zinc-900 border border-zinc-800 px-3 py-1 rounded-full">{prompt}</span>
      </div>

      {loading? (
        <div className="flex-1 flex flex-col items-center justify-center gap-4">
          <div className="text-4xl animate-bounce">🍔</div>
          <p className="font-mono animate-pulse">MADA V7 GERANDO EM MODO DEUS...</p>
        </div>
      ) : (
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-[1fr_400px]">
          <div className="bg-white min-h-[calc(100vh-56px)]">
            <iframe srcDoc={htmlPreview} className="w-full h-full min-h-[calc(100vh-56px)] border-0" />
          </div>
          <div className="bg-zinc-950 border-l border-zinc-800 p-4 overflow-auto">
            <p className="text-xs text-zinc-500 mb-3 font-mono">CÓDIGO GERADO:</p>
            <pre className="text-[10px] text-zinc-400 whitespace-pre-wrap break-words">{code}</pre>
          </div>
        </div>
      )}
    </div>
  );
}
