import { GoogleGenerativeAI } from '@google/generative-ai'

export async function runProgrammer(prompt: string, architecture: any) {
  const apiKey = process.env.GOOGLE_API_KEY || process.env.GEMINI_API_KEY || ''
  
  const FALLBACK = `<!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><script src="https://cdn.tailwindcss.com"></script></head><body style="margin:0;background:#0a0a0a;color:#fff"><section style="min-height:100vh;position:relative;padding:60px;display:flex;align-items:center"><img src="https://images.unsplash.com/photo-1568909347948-ff07a07b56a0?w=1200&q=80&auto=format&fit=crop" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:0.45"><div style="position:relative;z-index:10"><h1 style="font-size:80px;font-weight:900">BURGER<br><span style="color:#facc15">HOUSE</span></h1><p style="margin-top:20px">${prompt}</p><div style="margin-top:24px;display:flex;gap:16px"><div style="background:white;color:black;border-radius:20px;padding:14px;display:flex;gap:12px"><img src="https://images.unsplash.com/photo-1550547660-d9450f859349?w=300&auto=format&fit=crop&q=80" style="width:80px;height:80px;border-radius:12px;object-fit:cover"><b>X-Salada R$32</b></div><div style="background:white;color:black;border-radius:20px;padding:14px;display:flex;gap:12px"><img src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=300&auto=format&fit=crop&q=80" style="width:80px;height:80px;border-radius:12px;object-fit:cover"><b>X-Bacon R$45</b></div></div></div></section></body></html>`;

  if (!apiKey) return FALLBACK;

  try {
    const genAI = new GoogleGenerativeAI(apiKey)
    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' })

    const sys = `REGRA NUMERO 1: PROIBIDO EMOJI. OBRIGATORIO usar <img src="https://images.unsplash.com/photo-...?w=800&auto=format&fit=crop&q=80" class="w-full h-56 object-cover rounded-xl">
Voce é o PROGRAMMER NEXUS V8. Gere APENAS HTML puro com Tailwind CDN.
Pedido: ${prompt}
Arquitetura: ${JSON.stringify(architecture).slice(0,800)}
Gere landing page burger dark com amarelo #facc15. Use 2 fotos obrigatorias: https://images.unsplash.com/photo-1568909347948-ff07a07b56a0 e https://images.unsplash.com/photo-1550547660-d9450f859349
RETORNE APENAS HTML, sem \`\`\`json, sem explicacao.`;

    const result = await model.generateContent(sys)
    let html = result.response.text().replace(/```html|```/g,'').trim()
    
    if (!html.includes('<img') || !html.includes('unsplash')) return FALLBACK
    return html;

  } catch (e) {
    return FALLBACK;
  }
}
