"use client";
import { useSearchParams, useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function BuildPage() {
  const searchParams = useSearchParams();
  const params = useParams();
  const prompt = searchParams.get("prompt") || "";
  const [result, setResult] = useState("🧠 MADA V7 GERANDO EM MODO DEUS... Aguarde");

  useEffect(() => {
    async function run() {
      const res = await fetch("/api/mada/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });
      const text = await res.text();
      setResult(text);
    }
    if(prompt) run();
  }, [prompt]);

  return (
    <div style={{background:"#000", color:"#fff", minHeight:"100vh", padding:"20px"}}>
      <h1 style={{color:"#a855f7"}}>MADA V7 SUPREMA - BUILD {params.id as string}</h1>
      <p style={{color:"#888"}}>Prompt: {prompt}</p>
      <div style={{background:"#111", padding:"20px", marginTop:"20px", borderRadius:"10px", whiteSpace:"pre-wrap"}}>{result}</div>
      <a href="/" style={{display:"inline-block", marginTop:"20px", background:"#a855f7", padding:"10px 20px", borderRadius:"8px"}}>← Voltar</a>
    </div>
  )
}
