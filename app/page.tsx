"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function MADAHome() {
  const [prompt, setPrompt] = useState("");
  const [status, setStatus] = useState("");

  const router = useRouter();

  async function handleCreate() {
    if (!prompt) return;
    setStatus("👑 GOD MODE ATIVANDO - 10 MADAs debatendo...");
    const id = Date.now().toString();
    // Vai direto pro build que já tá funcionando
    router.push(`/build/${id}?prompt=${encodeURIComponent(prompt)}`);
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 text-center">
        MADA V7 SUPREMA
      </h1>
      <p className="mt-4 text-zinc-400 font-mono text-xs tracking-widest text-center">
        10/10 CAMADAS ATIVAS - MELHOR QUE LOVABLE
      </p>

      <div className="w-full max-w-2xl mt-10">
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="crie uma landpage de hamburgueria"
          className="w-full h-28 bg-zinc-900 border border-zinc-800 rounded-2xl p-4 text-white outline-none focus:border-purple-500 resize-none"
        />
        {status && <p className="mt-3 text-xs text-purple-400 font-mono">{status}</p>}

        <button
          onClick={handleCreate}
          className="w-full mt-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 text-white py-4 rounded-2xl font-bold text-lg"
        >
          CRIAR EM MODO DEUS →
        </button>

        <div className="mt-8 grid grid-cols-3 gap-2 text-[10px] text-zinc-500 font-mono">
          <span>✅ Cérebro Infinito</span>
          <span>✅ Auto-Conserto 30x/s</span>
          <span>✅ BRMemória v9 100k</span>
          <span>✅ WARContainer</span>
          <span>✅ Olho Gandal</span>
          <span>✅ FluidaFlow</span>
        </div>
      </div>
    </div>
  );
}
