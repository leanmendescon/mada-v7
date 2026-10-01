"use client";
import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "next/navigation";

export default function BuildPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const prompt = searchParams.get("prompt") || "";
  const [code, setCode] = useState("Gerando em MODO DEUS...");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function generate() {
      try {
        const res = await fetch("/api/mada/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ prompt }),
        });
        const data = await res.text();
        setCode(data);
      } catch (e) {
        setCode("Erro ao gerar: " + e);
      } finally {
        setLoading(false);
      }
    }
    if (prompt) generate();
  }, [prompt]);

  return (
    <div style={{ background: "#000", color: "#fff", minHeight: "100vh", padding: "20px" }}>
      <h1 style={{ color: "#a855f7", fontSize: "24px" }}>MADA V7 SUPREMA - BUILD {params.id as string}</h1>
      <p style={{ color: "#888", margin: "10px 0" }}>Prompt: {prompt}</p>
      {loading && <p style={{ color: "#a855f7" }}>⚡ CRIANDO EM MODO DEUS...</p>}
      <pre style={{ background: "#111", padding: "20px", borderRadius: "10px", overflow: "auto", marginTop: "20px", whiteSpace: "pre-wrap" }}>
        {code}
      </pre>
    </div>
  );
}
