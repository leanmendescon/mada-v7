import { GoogleGenerativeAI } from '@google/generative-ai'

export async function runProgrammer(prompt: string, architecture: any) {
  const apiKey = process.env.GOOGLE_API_KEY || process.env.GEMINI_API_KEY || ''
  
  const FALLBACK_HTML = `<!DOCTYPE html><html lang="pt-BR"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><script src="https://cdn.tailwindcss.com"></script></head><body style="margin:0;background:#0a0a0a;color:#fff"><section style="position:relative;min-height:100vh;padding:60px;display:flex;align-items:center"><img src="https://images.unsplash.com/photo-1568909347948-ff07a07b56a0?w=1200&auto=format&fit=crop&q=80" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:0.45"><div style="position:relative;z-index:10"><h1 style="font-size:72px;font-weight:900">BURGER<br><span style="color:#facc15">HOUSE</span></h1><p style="margin-top:16px;max-width:600px">${prompt}</p><div style="margin-top:24px;display:flex;gap:16px"><div style="background:#fff;color:#000;border-radius:20px;padding:14px;display:flex;gap:12px"><img src="https://images.unsplash.com/photo-1550547660-d9450f859349?w=300&auto=format&fit=crop&q=80" style="width:80px;height:80px;border-radius:12px;object-fit:cover"><b>X-Salada R$32</b></div><div style="background:#fff;color:#000;border-radius:20px;padding:14px;display:flex;gap:12px"><img src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=300&auto=format&fit=crop&q=80" style="width:80px;height:80px;border-radius:12px;object-fit:cover"><b>X-Bacon R$45</b></div></div></div></section></body></html>`;

  if (!apiKey) {
    return { files: [{ path: 'app/page.tsx', content: FALLBACK_HTML }], fallback: true }
  }

  try {
    const genAI = new GoogleGenerativeAI(apiKey)
    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash",
      generationConfig: { responseMimeType: "application/json" } // SUA MELHORIA 2
    })

    const sys = `Você é o PROGRAMMER NEXUS V8. Gere APENAS JSON válido no formato {"files":[{"path":"app/page.tsx","content":"HTML COMPLETO"}]}.
REGRAS OBRIGATÓRIAS:
1. PROIBIDO emoji para produtos. OBRIGATÓRIO usar <img src="https://images.unsplash.com/photo-... ?w=800&auto=format&fit=crop&q=80" class="w-full h-64 object-cover rounded-xl">
2. Tema: ${prompt} - arquitetura: ${JSON.stringify(architecture).slice(0,800)}
3. Use Tailwind CDN no content. Sempre 2 imagens Unsplash reais de hamburguer: https://images.unsplash.com/photo-1568909347948-ff07a07b56a0 e https://images.unsplash.com/photo-1550547660-d9450f859349`

    const result = await model.generateContent(sys)
    let text = result.response.text().trim()

    // SUA MELHORIA 1 - Limpeza robusta
    if (text.startsWith("```")) {
      text = text.replace(/^```(?:json)?\s*/i, "").replace(/\s*```$/,"")
    }
    text = text.trim()

    const parsed = JSON.parse(text)

    // Valida se tem imagem real, se não tiver força fallback
    const content = parsed.files?.[0]?.content || ""
    if (!content.includes("unsplash") || !content.includes("<img")) {
      return { files: [{ path: 'app/page.tsx', content: FALLBACK_HTML }], fallback: true }
    }

    return parsed

  } catch (e) {
    console.error("Erro no parse do JSON gerado:", e)
    return { files: [{ path: 'app/page.tsx', content: FALLBACK_HTML }], fallback: true }
  }
}
