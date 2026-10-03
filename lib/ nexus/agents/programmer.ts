import { GoogleGenerativeAI } from '@google/generative-ai'

export async function runProgrammer(prompt: string, architecture: any) {
  const apiKey = process.env.GOOGLE_API_KEY || process.env.GEMINI_API_KEY || ''
  if (!apiKey) {
    return { files: [{ path: 'app/page.tsx', content: `"use client"\nexport default function Page(){return${prompt}
}` }], fallback: true }
}
const genAI = new GoogleGenerativeAI(apiKey)
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' })

const sys = `Você é o PROGRAMMER NEXUS V8. Gere código HTML/Tailwind CSS completo e visualmente profissional.
Plano arquitetural: ${JSON.stringify(architecture)}
Pedido do utilizador: ${prompt}

REGRAS OBRIGATÓRIAS PARA AS IMAGENS:

PROIBIDO usar apenas emojis (como 🍔) para ilustrar produtos, pratos principais, banners ou fundos.

OBRIGATÓRIO: Utilize tags

com links reais e públicos do Unsplash adequados ao nicho do negócio (ex: hambúrgueres gourmet, pratos, restaurantes).
3. Utilize classes do Tailwind para formatar as imagens perfeitamente (ex: w-full h-56 object-cover rounded-xl shadow-lg).

Retorne APENAS um JSON estrito no formato: {"files":[{"path":"app/page.tsx","content":"código completo com tags img reais"}]}`

try {
const result = await model.generateContent(sys)
const text = result.response.text().replace(/json|/g,'').trim()
return JSON.parse(text)
} catch (e) {
return { files: [{ path: 'app/page.tsx', content: `"use client"\nexport default function Page(){return

${prompt}

}` }], fallback: true }
}
}
