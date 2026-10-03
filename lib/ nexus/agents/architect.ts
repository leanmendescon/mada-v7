import { GoogleGenerativeAI } from '@google/generative-ai'

export async function runArchitect(prompt: string, research: any) {
  const apiKey = process.env.GOOGLE_API_KEY || process.env.GEMINI_API_KEY || ''
  if (!apiKey) {
    return { projectName: 'mada-app', files: [{ path: 'app/page.tsx', purpose: 'main' }], fallback: true }
  }
  const genAI = new GoogleGenerativeAI(apiKey)
  const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' })
  const sys = `Você é o ARCHITECT NEXUS V8. Pedido: \({prompt} Research:\){JSON.stringify(research)} Retorne APENAS JSON: {"projectName":"nome","files":[{"path":"app/page.tsx","purpose":"..."}]}`
  try {
    const result = await model.generateContent(sys)
    const text = result.response.text().replace(/```json|```/g,'').trim()
    return JSON.parse(text)
  } catch {
    return { projectName: 'mada-app', files: [{ path: 'app/page.tsx', purpose: 'main' }], fallback: true }
  }
}
