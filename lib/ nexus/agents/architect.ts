import { GoogleGenerativeAI } from '@google/generative-ai'

export async function runArchitect(prompt: string, research: any) {
  const apiKey = process.env.GOOGLE_API_KEY || process.env.GEMINI_API_KEY || ''
  if (!apiKey) {
    return { projectName: 'mada-app', files: [{ path: 'app/page.tsx', purpose: 'main' }], fallback: true }
  }
  const genAI = new GoogleGenerativeAI(apiKey)
  const model = genAI.getGenerativeModel({
    model: 'gemini-1.5-flash',
    generationConfig: { responseMimeType: 'application/json' } as any
  })
  const sys = `Você é o ARCHITECT NEXUS V8. Pedido: ${prompt} Research: ${JSON.stringify(research)} Retorne JSON: {"projectName":"nome","files":[{"path":"app/page.tsx","purpose":"..."}]}`
  try {
    const result = await model.generateContent(sys)
    return JSON.parse(result.response.text().trim())
  } catch {
    return { projectName: 'mada-app', files: [{ path: 'app/page.tsx', purpose: 'main' }], fallback: true }
  }
}
