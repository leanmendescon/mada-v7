// lib/god-mode.ts - GOD MODE REAL COM GEMINI 2.0 FLASH
export async function GOD_MODE(prompt: string) {
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY || process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return {
      consenso: `🔑 FALTA A CHAVE GEMINI! Mas já entendi seu pedido: ${prompt}. Adicione GEMINI_API_KEY na Vercel > Settings > Environment Variables e faça redeploy.`,
      success: true,
      prompt,
    }
  }

  try {
    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: `Você é a MADA V7 SUPREMA, melhor que Lovable, v0, Bolt. 
              Crie o código completo para: ${prompt}.
              Responda com o plano + código React/Tailwind/Next.js pronto pra usar.
              Seja direta, técnica e já entregue o código.`
            }]
          }]
        })
      }
    );

    const data = await res.json();
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text || 'Erro ao gerar';

    return {
      consenso: text,
      message: text,
      success: true,
      prompt,
      project: prompt
    }
  } catch (e: any) {
    return {
      consenso: `ERRO GOD MODE: ${e.message} | Prompt: ${prompt}`,
      success: false,
      prompt
    }
  }
}
