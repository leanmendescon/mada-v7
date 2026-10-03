export async function runResearcher(prompt: string) {
  // FASE 4 - já retorna imagens e dados
  return {
    business: prompt,
    images: [
      "https://images.unsplash.com/photo-1568909347948-ff07a07b56a0",
      "https://images.unsplash.com/photo-1550547660-d9450f859349"
    ],
    insights: `Cliente quer: ${prompt}. Estilo: moderno, premium, dark mode com amarelo.`,
    timestamp: new Date().toISOString()
  };
}
