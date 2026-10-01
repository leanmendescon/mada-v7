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
    router.push(`/build/${id}?prompt=${encodeURIComponent(prompt)}`);
  }

  return (
    <div style={{ minHeight: "100vh", background: "#000", color: "#fff", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "24px", fontFamily: "sans-serif" }}>
      <h1 style={{ fontSize: "64px", fontWeight: "900", background: "linear-gradient(to right, #a855f7, #ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", textAlign: "center" }}>
        MADA V7 SUPREMA
      </h1>
      <p style={{ marginTop: "16px", color: "#71717a", fontFamily: "monospace", fontSize: "12px", letterSpacing: "2px" }}>
        10/10 CAMADAS ATIVAS - MELHOR QUE LOVABLE
      </p>

      <div style={{ width: "100%", maxWidth: "640px", marginTop: "40px" }}>
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="crie uma landpage de hamburgueria"
          style={{ width: "100%", height: "110px", background: "#18181b", border: "1px solid #27272a", borderRadius: "16px", padding: "16px", color: "#fff", outline: "none", resize: "none" }}
        />
        {status && <p style={{ marginTop: "12px", fontSize: "12px", color: "#a855f7", fontFamily: "monospace" }}>{status}</p>}

        <button
          onClick={handleCreate}
          style={{ width: "100%", marginTop: "16px", background: "linear-gradient(to right, #a855f7, #ec4899)", color: "#fff", padding: "16px", borderRadius: "16px", fontWeight: "bold", fontSize: "18px", border: "none", cursor: "pointer" }}
        >
          CRIAR EM MODO DEUS →
        </button>

        <div style={{ marginTop: "32px", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "8px", fontSize: "10px", color: "#52525b", fontFamily: "monospace" }}>
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
