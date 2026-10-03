export async function runProgrammer(prompt: string, architecture: any) {
  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<script src="https://cdn.tailwindcss.com"></script>
</head>
<body style="margin:0;background:#0a0a0a;color:white;font-family:sans-serif">
<section style="min-height:100vh;position:relative;display:flex;align-items:center;padding:40px;background:#0a0a0a">
  <img src="https://images.unsplash.com/photo-1568909347948-ff07a07b56a0?w=1200&q=80&auto=format&fit=crop" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:0.5" />
  <div style="position:relative;z-index:10">
    <h1 style="font-size:80px;font-weight:900;line-height:0.9">BURGER<br><span style="color:#facc15">HOUSE</span></h1>
    <p style="margin-top:20px;max-width:500px;font-size:18px;color:#e5e5e5">${prompt} - Blend 180g, pão brioche artesanal.</p>
    <button style="margin-top:24px;background:#facc15;color:black;padding:16px 32px;border-radius:999px;font-weight:900;border:0">PEDIR NO WHATSAPP →</button>
  </div>
</section>
<section style="background:white;color:black;padding:60px 40px;border-radius:40px 40px 0 0;margin-top:-40px;position:relative;z-index:20">
  <h2 style="font-size:48px;font-weight:900">CARDÁPIO.</h2>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-top:30px">
    <div style="background:#fafafa;padding:20px;border-radius:24px;display:flex;gap:16px">
      <img src="https://images.unsplash.com/photo-1550547660-d9450f859349?w=300&q=80&auto=format&fit=crop" style="width:110px;height:110px;border-radius:16px;object-fit:cover" />
      <div><b>X-Salada Supremo</b><br><span style="color:gray">Blend 180g, cheddar</span><br><b style="font-size:22px">R$ 32</b></div>
    </div>
    <div style="background:#fafafa;padding:20px;border-radius:24px;display:flex;gap:16px">
      <img src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=300&q=80&auto=format&fit=crop" style="width:110px;height:110px;border-radius:16px;object-fit:cover" />
      <div><b>X-Bacon Duplo</b><br><span style="color:gray">Duplo blend + bacon</span><br><b style="font-size:22px">R$ 45</b></div>
    </div>
  </div>
</section>
</body>
</html>`;
}
