export async function runProgrammer(prompt: string, architecture: any) {
  // FORÇA FOTO REAL - IGNORA GEMINI PRA TESTAR
  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<script src="https://cdn.tailwindcss.com"></script>
</head>
<body style="margin:0;background:#0a0a0a;color:white;font-family:Inter,Arial,sans-serif">
<section style="min-height:100vh;position:relative;padding:60px;display:flex;align-items:center;background:#0a0a0a">
  <img src="https://images.unsplash.com/photo-1568909347948-ff07a07b56a0?w=1200&auto=format&fit=crop&q=80" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:0.45" />
  <div style="position:relative;z-index:10;max-width:700px">
    <span style="background:#facc15;color:black;padding:6px 14px;border-radius:999px;font-weight:900;font-size:12px">MADA V7 • NEXUS V8</span>
    <h1 style="font-size:80px;font-weight:900;line-height:0.85;margin-top:20px">BURGER<br><span style="color:#facc15">HOUSE</span></h1>
    <p style="margin-top:20px;font-size:18px;color:#e5e5e5;line-height:1.5">${prompt} - A melhor hamburgueria artesanal. Blend 180g, pão brioche e muito sabor.</p>
    <div style="margin-top:32px;display:grid;grid-template-columns:1fr 1fr;gap:16px">
      <div style="background:white;color:black;border-radius:24px;padding:16px;display:flex;gap:14px;align-items:center">
        <img src="https://images.unsplash.com/photo-1550547660-d9450f859349?w=300&auto=format&fit=crop&q=80" style="width:90px;height:90px;border-radius:16px;object-fit:cover;flex-shrink:0" />
        <div><div style="font-weight:900">X-Salada Supremo</div><div style="font-size:12px;color:#666">Pão brioche, blend 180g, cheddar</div><div style="font-weight:900;font-size:20px;margin-top:4px">R$ 32</div></div>
      </div>
      <div style="background:white;color:black;border-radius:24px;padding:16px;display:flex;gap:14px;align-items:center">
        <img src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=300&auto=format&fit=crop&q=80" style="width:90px;height:90px;border-radius:16px;object-fit:cover;flex-shrink:0" />
        <div><div style="font-weight:900">X-Bacon Duplo</div><div style="font-size:12px;color:#666">2x blend 180g, bacon, cheddar duplo</div><div style="font-weight:900;font-size:20px;margin-top:4px">R$ 45</div></div>
      </div>
    </div>
    <button style="margin-top:28px;background:#facc15;color:black;border:0;padding:16px 32px;border-radius:999px;font-weight:900;font-size:16px;cursor:pointer">PEDIR NO WHATSAPP →</button>
  </div>
</section>
</body>
</html>`;
}
