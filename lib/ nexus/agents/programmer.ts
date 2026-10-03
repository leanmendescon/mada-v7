export async function runProgrammer(prompt: string, architecture: any) {
  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<script src="https://cdn.tailwindcss.com"></script>
<style>@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@900&display=swap');body{font-family:'Outfit',sans-serif}</style>
</head>
<body class="bg-[#0a0a0a] text-white">
  <section class="min-h-screen flex flex-col justify-center px-8 md:px-20 relative overflow-hidden">
    <img src="https://images.unsplash.com/photo-1568909347948-ff07a07b56a0?w=1200" class="absolute inset-0 w-full h-full object-cover opacity-40" />
    <div class="relative z-10">
      <h1 class="text-7xl md:text-8xl font-black leading-[0.85]">BURGER<br><span class="text-yellow-400">HOUSE</span></h1>
      <p class="text-xl mt-6 max-w-xl text-gray-200">A melhor hamburgueria artesanal. Blend 180g, pão brioche e muito sabor. ${prompt}</p>
      <button class="mt-8 bg-yellow-400 text-black px-10 py-4 rounded-full font-black text-lg">PEDIR NO WHATSAPP →</button>
    </div>
  </section>
  <section class="px-8 md:px-20 py-16 bg-white text-black rounded-t-[40px] -mt-10 relative z-20">
    <h2 class="text-5xl font-black">CARDÁPIO.</h2>
    <div class="grid md:grid-cols-2 gap-6 mt-10">
      <div class="flex gap-5 bg-zinc-50 p-6 rounded-3xl">
        <img src="https://images.unsplash.com/photo-1550547660-d9450f859349?w=400" class="w-28 h-28 rounded-2xl object-cover"/>
        <div><h3 class="font-black text-xl">X-Salada Supremo</h3><p class="text-zinc-500">Blend 180g, cheddar, salada</p><p class="font-black text-2xl mt-2 text-yellow-600">R$ 32</p></div>
      </div>
      <div class="flex gap-5 bg-zinc-50 p-6 rounded-3xl">
        <img src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400" class="w-28 h-28 rounded-2xl object-cover"/>
        <div><h3 class="font-black text-xl">X-Bacon Duplo</h3><p class="text-zinc-500">Duplo blend, bacon, cheddar duplo</p><p class="font-black text-2xl mt-2 text-yellow-600">R$ 45</p></div>
      </div>
    </div>
  </section>
</body>
</html>`;
}
