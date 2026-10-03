import { GoogleGenerativeAI } from '@google/generative-ai'

export async function runProgrammer(prompt: string, architecture: any) {
  const apiKey = process.env.GOOGLE_API_KEY || process.env.GEMINI_API_KEY || ''
  if (!apiKey) {
    return {
      files: [{ path: 'app/page.tsx', content: `"use client"\nexport default function Page(){return <div className="p-10"><h1>${prompt}</h1></div>}` }],
      fallback: true
    }
  }
  const genAI = new GoogleGenerativeAI(apiKey)
  const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' })
  const systemPrompt = `Você é o PROGRAMMER do NEXUS V8.
Gere Next.js 14 + Tailwind. Plano: ${JSON.stringify(architecture)} Pedido: ${prompt}
Retorne JSON: {"files":[{"path":"app/page.tsx","content":"codigo completo"}]} APENAS JSON.`
  try {
    const result = await model.generateContent(systemPrompt)
    const text = result.response.text().replace(/```json|```/g, '').trim()
    return JSON.parse(text)
  } catch (e) {
    return {
      files: [{ path: 'app/page.tsx', content: `"use client"\nexport default function Page(){return <div className="p-10"><h1 className="text-4xl font-bold">${prompt}</h1><p>Gerado pelo Nexus V8</p></div>}` }],
      fallback: true
    }
  }
}
