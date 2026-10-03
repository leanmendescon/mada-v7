import { GoogleGenerativeAI } from '@google/generative-ai'

export async function runProgrammer(prompt: string, architecture: any) {
  const apiKey = process.env.GOOGLE_API_KEY || process.env.GEMINI_API_KEY || ''

  // Fallback 100% genérico - funciona pra qualquer nicho
  const keyword = encodeURIComponent(prompt.slice(0,30))
  const FALLBACK_HTML = `<!DOCTYPE html><html lang="pt-BR"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><script src="https://cdn.tailwindcss.com"></script></head><body style="margin:0;background:#111;color:#fff"><section style="min-height:100vh;padding:60px;display:flex;align-items:center;justify-content:center;text-align:center"><div><img src="https://source.unsplash.com/800x600/?${keyword}" style="width:800px;max-width:90vw;height:400px;object-fit:cover;border-radius:24px;margin:0 auto 24px;display:block"><h1 style="font-size:56px;font-weight:900">${prompt}</h1><p style="opacity:0.7;margin-top:12px">Landing page gerada pelo NEXUS V8</p></div></section></body></html>`;

  if (!apiKey) return { files: [{ path: 'app/page.tsx', content: FALLBACK_HTML }], fallback: true }

  try {
    const genAI = new GoogleGenerativeAI(apiKey)
    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash",
      generationConfig: { responseMimeType: "application/json" }
    })

    const sys = `Você é o PROGRAMMER NEXUS V8. Gere APENAS JSON válido: {"files":[{"path":"app/page.tsx","content":"CODIGO_HTML"}]}
REGRAS:
1. PROIBIDO emoji no lugar de imagem
2. OBRIGATÓRIO <img src="https://images.unsplash.com/photo-..." class="w-full h-64 object-cover rounded-xl"> com fotos reais do Unsplash CONTEXTUALIZADAS ao tema "${prompt}" (ex: se for advocacia use escritório, se for hamburgueria use burger, se for clinica use dentista)
3. Tailwind via CDN
4. Tema: "${prompt}" | Arquitetura: ${JSON.stringify(architecture).slice(0,800)}`;

    const result = await model.generateContent(sys)
    let text = result.response.text().trim()

    if (text.startsWith("```")) {
      text = text.replace(/^```(?:json)?\s*/i, "").replace(/\s*```\s*$/,"")
    }
    text = text.trim()

    const parsed = JSON.parse(text)
    const content = parsed.files?.[0]?.content || ""
    if (!content.includes("<img")) {
      return { files: [{ path: 'app/page.tsx', content: FALLBACK_HTML }], fallback: true }
    }
    return parsed

  } catch (e) {
    console.error("Erro no parse:", e)
    return { files: [{ path: 'app/page.tsx', content: FALLBACK_HTML }], fallback: true }
  }
}
