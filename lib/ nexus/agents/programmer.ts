import { GoogleGenerativeAI } from '@google/generative-ai'

export async function runProgrammer(prompt: string, architecture: any) {
  const apiKey = process.env.GOOGLE_API_KEY || process.env.GEMINI_API_KEY || ''
  if (!apiKey) {
    return { files: [{ path: 'app/page.tsx', content: `"use client"\nexport default function Page(){return <div className="p-10 text-4xl font-bold">${prompt}</div>}` }], fallback: true }
  }
  const genAI = new GoogleGenerativeAI(apiKey)
  const model = genAI.getGenerativeModel({
    model: 'gemini-1.5-flash',
    generationConfig: { responseMimeType: 'application/json' } as any
  })
  const sys = `Você é o PROGRAMMER NEXUS V8. Gere Next.js 14 + Tailwind. Plano: ${JSON.stringify(architecture)} Pedido: ${prompt} Retorne JSON: {"files":[{"path":"app/page.tsx","content":"codigo completo com \\"use client\\""}]}`
  try {
    const result = await model.generateContent(sys)
    return JSON.parse(result.response.text().trim())
  } catch (e) {
    console.error(e)
    return { files: [{ path: 'app/page.tsx', content: `"use client"\nexport default function Page(){return <div>${prompt}</div>}` }], fallback: true }
  }
}
