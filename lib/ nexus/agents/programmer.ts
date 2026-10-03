import { GoogleGenerativeAI } from '@google/generative-ai'

export async function runProgrammer(prompt: string, architecture: any) {
  const apiKey = process.env.GOOGLE_API_KEY || process.env.GEMINI_API_KEY || ''
  
  // FALLBACK COM FOTO REAL - nunca emoji, nunca tela branca
  const FALLBACK_HTML = `<!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><script src="https://cdn.tailwindcss.com"></script></head><body style="margin:0;background:#0a0a0a;color:white"><section style="min-height:100vh;position:relative;padding:50px;display:flex;align-items:center"><img src="https://images.unsplash.com/photo-1568909347948-ff07a07b56a0?w=1200&auto=format&fit=crop&q=80" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:0.45"><div style="position:relative;z-index:10"><h1 style="font-size:72px;font-weight:900;line-height:0.85">BURGER<br><span style="color:#facc15">HOUSE</span></h1><p style="margin-top:20px;max-width:520px;color:#e5e5e5">${prompt}</p><div style="margin-top:28px;display:flex;gap:16px"><div style="background:white;color:black;border-radius:20px;padding:14px;display:flex;gap:12px;align-items:center"><img src="https://images.unsplash.com/photo-1550547660-d9450f859349?w=200&auto=format&fit=crop&q=80" style="width:80px;height:80px;border-radius:12px;object-fit:cover"><div><b>X-Salada Supremo</b><br>R$ 32</div></div><div style="background:white;color:black;border-radius:20px;padding:14px;display:flex;gap:12px;align-items:center"><img src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=200&auto=format&fit=crop&q=80" style="width:80px;height:80px;border-radius:12px;object-fit:cover"><div><b>X-Bacon Duplo</b><br>R$ 45</div></div></div></div></section></body></html>`;

  if (!apiKey) return FALLBACK_HTML;

  try {
    const genAI = new GoogleGenerativeAI(apiKey)
    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' })
    
    const sys = `Você é PROGRAMMER NEXUS V8. Gere APENAS HTML puro com Tailwind CDN.

Arquitetura: ${JSON.stringify(architecture).slice(0,1000)}
Pedido: ${prompt}

REGRAS OBRIGATÓRIAS:
- NUNCA use emoji 🍔 para produto principal. Use SEMPRE <img src="https://images.unsplash.com/photo-....w=...&auto=format&fit=crop&q=80" class="w-full h-48 object-cover rounded-xl">
- Contexto hamburgueria: use https://images.unsplash.com/photo-1568909347948-ff07a07b56a0 e https://images.unsplash.com/photo-1550547660-d9450f859349
- Retorne APENAS o HTML completo, sem markdown, sem \`\`\`

Gere landing page premium dark com amarelo #facc15.`;

    const result = await model.generateContent(sys)
    let text = result.response.text().trim()
    text = text.replace(/```html|```/g,'').trim()
    
    // Validação: se veio sem img, usa fallback
    if (!text.includes('<img') || text.length < 500) return FALLBACK_HTML
    if (!text.includes('<!DOCTYPE')) text = `<!DOCTYPE html><html><head><script src="https://cdn.tailwindcss.com"></script></head><body>${text}</body></html>`
    
    return text
  } catch (e) {
    console.error('Gemini erro', e)
    return FALLBACK_HTML
  }
}
