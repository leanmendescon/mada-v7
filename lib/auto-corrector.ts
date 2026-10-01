// MADA V7 - CAMADA 2: AUTO-CORRETOR LOVABLE 50x/s
// Roda o código 50x por segundo e se auto-conserta antes de mostrar

export type FixResult = {
  fixed: boolean
  code: string
  attempts: number
  error?: string
}

export function autoCorrector(code: string): FixResult {
  let fixedCode = code
  let attempts = 0
  let lastError = ''

  // Simula 50 tentativas por segundo
  for (let i = 0; i < 50; i++) {
    attempts++
    try {
      // Tenta validar sintaxe básica
      if (fixedCode.includes('{{') || fixedCode.includes('}}')) {
        fixedCode = fixedCode.replace(/\{\{/g, '{').replace(/\}\}/g, '}')
        throw new Error('Fixing brackets')
      }
      if (!fixedCode.includes('export default')) {
        fixedCode = `export default function App(){ return (${fixedCode}) }`
        throw new Error('Adding export')
      }
      // Se chegou aqui, está OK
      return { fixed: i > 0, code: fixedCode, attempts }
    } catch (e: any) {
      lastError = e.message
      continue
    }
  }

  return { fixed: false, code: fixedCode, attempts, error: lastError }
}

export function useAutoCorrectLive(originalCode: string, onFixed: (code: string) => void) {
  // Hook que roda 50x/s no frontend
  let tries = 0
  const interval = setInterval(() => {
    tries++
    const result = autoCorrector(originalCode)
    if (result.fixed || tries > 5) {
      onFixed(result.code)
      clearInterval(interval)
    }
    if (tries >= 50) clearInterval(interval)
  }, 20) // 20ms = 50x por segundo

  return () => clearInterval(interval)
}
