export async function runProgrammer(prompt: string, architecture: any) {
  const business = prompt.toLowerCase();
  const isBurger = business.includes('burger') || business.includes('hamburg');
  
  const images = isBurger ? [
    "https://images.unsplash.com/photo-1568909347948-ff07a07b56a0?w=800",
    "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800",
    "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800"
  ] : [
    "https://images.unsplash.com/photo-1497366811353-26cc3b5901fa?w=800",
    "https://images.unsplash.com/photo-1497366216548-37526070297b?w=800"
  ];

  return `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<script src="https://cdn.tailwindcss.com"></script>
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap" rel="stylesheet">
<style>body{font-family:'Outfit',sans-serif}</style>
</head>
<body class="bg-[#0a0a0a] text-white">
  <!-- HERO -->
  <section class="min-h-screen flex flex-col justify-center px-6 md:px-20 relative overflow-hidden">
    <img src="${images[0]}" class="absolute inset-0 w-full h-full object-cover opacity-30" />
    <div class="relative z-10 max-w-4xl">
      <span class="bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-bold">${prompt.toUpperCase()}</span>
      <h1 class="text-6xl md:text-8xl font-black mt-6 leading-[0.9]">BURGER<br><span class="text-yellow-400">HOUSE</span></h1>
      <p class="text-xl mt-6 text-gray-300 max-w-xl">A melhor hamburgueria artesanal da cidade. Blend 180g, pão brioche e muito sabor.</p>
      <button class="mt-8 bg-yellow-400 text-black px-10 py-4 rounded-full font-black text-lg hover:scale-105 transition">PEDIR AGORA →</button>
    </div>
  </section>

  <!-- CARDÁPIO -->
  <section class="px-6 md:px-20 py-20 bg-white text-black rounded-t-[40px] -mt-10 relative z-20">
    <h2 class="text-5xl font-black">CARDÁPIO<span class="text-yellow-500">.</span></h2>
    <div class="grid md:grid-cols-2 gap-8 mt-12">
      <div class="bg-gray-50 p-6 rounded-[24px] flex gap-6">
        <img src="${images[1]}" class="w-32 h-32 rounded-2xl object-cover" />
        <div>
          <h3 class="font-black text-2xl">X-Salada Supremo</h3>
          <p class="text-gray-600 mt-2">Blend 180g, queijo cheddar, alface e tomate</p>
          <p class="font-black text-2xl mt-4 text-yellow-600">R$ 32</p>
        </div>
      </div>
      <div class="bg-gray-50 p-6 rounded-[24px] flex gap-6">
        <img src="${images[2] || images[0]}" class="w-32 h-32 rounded-2xl object-cover" />
        <div>
          <h3 class="font-black text-2xl">X-Bacon Duplo</h3>
          <p class="text-gray-600 mt-2">Duplo blend 180g, bacon crocante e muito queijo</p>
          <p class="font-black text-2xl mt-4 text-yellow-600">R$ 45</p>
        </div>
      </div>
    </div>
  </section>
</body>
</html>
  `.trim();
}
