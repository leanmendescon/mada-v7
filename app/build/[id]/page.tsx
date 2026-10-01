"use client";
import { useSearchParams, useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function BuildPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const prompt = searchParams.get("prompt") || "";
  const [code, setCode] = useState("MADA V7 GERANDO EM MODO DEUS... Aguarde");

  useEffect(() => {
    if (!prompt) {
      setCode("Sem prompt. Volte na home e digite algo.");
      return;
    }
    async function run() {
      try {
        const res = await fetch("/api/mada/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ prompt, id: params.id }),
        });
        const data = await res.text();
        setCode(data);
      } catch (e: any) {
        setCode("ERRO: " + e.message);
      }
    }
    run();
  }, [prompt, params.id]);

  return (
    <div style={{ background: "#000", color: "#fff", minHeight: "100vh", padding: "20px" }}>
      <h1 style={{ color: "#ff00ff" }}>MADA V7 SUPREMA - BUILD {params?.id as string}</h1>
      <p style={{ opacity: 0.6, fontSize: "12px", marginTop: "10px" }}>Prompt: {prompt}</p>
      <div style={{ marginTop: "20px", background: "#111", padding: "20px", borderRadius: "10px", border: "1px solid #333", whiteSpace: "pre-wrap" }}>
        {code}
      </div>
    </div>
  );
}
