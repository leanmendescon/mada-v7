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
      try {
        const res = await fetch("/api/mada/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ prompt, message: prompt, id: params.id }),
        });
        const data = await res.json();
        setCode(data.code || "<div>GERADO</div>");
      } catch(e) {
        setCode("<div>Erro ao gerar, mas prompt: " + prompt + "</div>");
      }
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
  <body style="background:#000;color:#fff;font-family:sans-serif">
    <div style="max-width:900px;margin:0 auto;padding:60px 20px">
      <div style="font-size:12px;color:#52525b;letter-spacing:3px;margin-bottom:20px">MADA V7 SUPREMA</div>
      <h1 style="font-size:72px;font-weight:900;line-height:0.9">BURGER<br><span style="color:#ff0055">HOUSE</span> 🍔</h1>
      <p style="font-size:22px;color:#a1a1aa;margin-top:24px;max-width:500px">${prompt} - A melhor hamburgueria artesanal. Blend 180g, pão brioche e muito sabor.</p>
      
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-top:60px">
        <div style="background:#18181b;border:1px solid #27272a;padding:32px;border-radius:24px">
          <div style="font-size:48px">🍔</div>
          <h2 style="font-size:20px;font-weight:bold;margin-top:10px">X-Salada Supremo</h2>
          <p style="color:#71717a;margin-top:8px">Pão brioche, blend 180g, cheddar</p>
          <div style="margin-top:20px;display:flex;justify-content:space-between"><b style="font-size:22px">R$ 32</b><span style="background:#fff;color:#000;padding:4px 12px;border-radius:20px;font-size:10px">MAIS PEDIDO</span></div>
        </div>
        <div style="background:#18181b;border:1px solid #27272a;padding:32px;border-radius:24px">
          <div style="font-size:48px">🥓</div>
          <h2 style="font-size:20px;font-weight:bold;margin-top:10px">X-Bacon Duplo</h2>
          <p style="color:#71717a;margin-top:8px">2x blend 180g, bacon, cheddar duplo</p>
          <div style="margin-top:20px;display:flex;justify-content:space-between"><b style="font-size:22px">R$ 45</b><span style="background:#ff0055;color:#fff;padding:4px 12px;border-radius:20px;font-size:10px">NOVO</span></div>
        </div>
      </div>

      <button style="margin-top:48px;background:#ff0055;color:#fff;padding:20px 48px;border-radius:100px;font-size:18px;font-weight:900;border:none">PEDIR NO WHATSAPP →</button>
      <div style="margin-top:80px;font-size:10px;color:#3f3f46">Build ${params.id} • MADA V7</div>
    </div>
  </body>
  </html>`;

  if (loading) {
    return (
      <div style={{ minHeight: "100vh", background: "#000", color: "#fff", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <div style={{ fontSize: "40px", animation: "bounce 1s infinite" }}>🍔</div>
        <p style={{ marginTop: "16px", fontFamily: "monospace", animation: "pulse 1s infinite" }}>MADA V7 GERANDO {prompt} EM MODO DEUS...</p>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", background: "#0a0a0a", display: "flex", flexDirection: "column" }}>
      <div style={{ height: "56px", borderBottom: "1px solid #27272a", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 24px", background: "#000", color: "#fff" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{ width: "8px", height: "8px", background: "#22c55e", borderRadius: "50%" }}></div>
          <span style={{ fontFamily: "monospace", fontSize: "13px" }}>MADA V7 • {String(params.id).slice(0,8)}</span>
        </div>
        <div style={{ display: "flex", gap: "8px" }}>
          <button onClick={() => navigator.clipboard.writeText(code)} style={{ background: "#27272a", color: "#fff", border: "1px solid #3f3f46", padding: "6px 12px", borderRadius: "20px", fontSize: "11px", cursor: "pointer" }}>COPIAR CÓDIGO</button>
          <button onClick={() => window.location.href = '/'} style={{ background: "#fff", color: "#000", padding: "6px 12px", borderRadius: "20px", fontSize: "11px", fontWeight: "bold", cursor: "pointer" }}>+ NOVO</button>
        </div>
      </div>

      <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 380px" }}>
        <div style={{ background: "#fff" }}>
          <iframe srcDoc={htmlPreview} style={{ width: "100%", height: "calc(100vh - 56px)", border: "0" }} />
        </div>
        <div style={{ background: "#09090b", borderLeft: "1px solid #27272a", padding: "16px", overflow: "auto" }}>
          <p style={{ fontSize: "10px", color: "#52525b", fontFamily: "monospace", marginBottom: "8px" }}>PROMPT: {prompt}</p>
          <p style={{ fontSize: "10px", color: "#52525b", fontFamily: "monospace", marginBottom: "12px" }}>CÓDIGO GERADO:</p>
          <pre style={{ fontSize: "10px", color: "#a1a1aa", whiteSpace: "pre-wrap", wordBreak: "break-all", background: "#18181b", padding: "12px", borderRadius: "8px" }}>{code.slice(0, 5000)}</pre>
        </div>
      </div>
    </div>
  );
}
