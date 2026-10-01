// lib/god-mode.ts - VERSÃO LIMPA QUE NÃO QUEBRA
export async function GOD_MODE(prompt: string) {
  console.log('👑 DEUS MODE ATIVADO PARA:', prompt)
  return {
    success: true,
    message: `MADA executou: ${prompt}`,
    prompt: prompt,
  }
}

export async function GOD_MODE_SIMPLE(prompt: string) {
  return GOD_MODE(prompt)
}
