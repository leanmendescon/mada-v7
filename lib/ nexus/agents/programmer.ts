export async function runProgrammer(prompt: string, architecture: any) {
  // FASE 4 - COM FOTO REAL UNSPLASH - SEM EMOJI
  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<script src="https://cdn.tailwindcss.com"></script>
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@800;900&display=swap" rel="stylesheet">
<style>body{font-family:'Outfit',sans-serif;margin:0}</style>
</head>
<body class="bg-[#0a0a0a] text-white overflow-x-hidden">
  <section class="min-h-[80vh] flex flex-col justify-center px-8 md:px-20 relative">
    <img src="https://images.unsplash.com/photo-1568909347948-ff07a07b56a0?w=1200&auto=format&fit=crop&q=80" class="absolute inset-0 w-full h-full object-cover opacity-50" />
    <div class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
    <div class="relative z-10">
      <span class="bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-black">MADA V7 • NEXUS</span>
      <h1 class="text-7xl md:text-8xl font-black leading-[0.85] mt-6">BURGER<br><span class="text-yellow-400">HOUSE</span></h1>
      <p class="text-xl mt-6 max-w-xl text-gray-200">Prompt: ${prompt} — A melhor hamburgueria artesanal. Blend 180g, pão brioche e muito sabor.</p>
      <button class="mt-8 bg-yellow-400 text-black px-10 py-4 rounded-full font-black text-lg hover:scale-105 transition">PEDIR NO WHATSAPP →</button>
    </div>
  </section>
  <section class="px-8 md:px-20 py-16 bg-white text-black rounded-t-[40px] -mt-10 relative z-20 min-h-[50vh]">
    <h2 class="text-5xl font-black">CARDÁPIO.</h2>
    <div class="grid md:grid-cols-2 gap-6 mt-10">
      <div class="flex gap-5 bg-zinc-50 p-6 rounded-3xl border">
        <img src="https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&auto=format&fit=crop&q=80" class="w-28 h-28 rounded-2xl object-cover"/>
        <div><h3 class="font-black text-xl">X-Salada Supremo</h3><p class="text-zinc-500 text-sm">Pão brioche, blend 180g, cheddar</p><p class="font-black text-2xl mt-2">R$ 32</p></div>
      </div>
      <div class="flex gap-5 bg-zinc-50 p-6 rounded-3xl border">
        <img src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&auto=format&fit=crop&q=80" class="w-28 h-28 rounded-2xl object-cover"/>
        <div><h3 class="font-black text-xl">X-Bacon Duplo</h3><p class="text-zinc-500 text-sm">2x blend 180g, bacon, cheddar duplo</p><p class="font-black text-2xl mt-2">R$ 45</p></div>
      </div>
    </div>
  </section>
</body>
</html>`;
}
