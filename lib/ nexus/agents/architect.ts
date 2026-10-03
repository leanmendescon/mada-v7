import { GoogleGenerativeAI } from '@google/generative-ai'

export async function runArchitect(prompt: string, research: any) {
  const apiKey = process.env.GOOGLE_API_KEY || process.env.GEMINI_API_KEY || ''
  if (!apiKey) {
    return {
      projectName: 'generated-app',
      files: [{ path: 'app/page.tsx', purpose: 'main' }],
      fallback: true
    }
  }
  const genAI = new GoogleGenerativeAI(apiKey)
  const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' })
  const systemPrompt = `Você é o ARCHITECT do NEXUS V8.
Pedido: ${prompt}
Research: ${JSON.stringify(research)}
Crie JSON: {"projectName":"nome","files":[{"path":"app/page.tsx","purpose":"..."}]}
Retorne APENAS JSON.`
  try {
    const result = await model.generateContent(systemPrompt)
    const text = result.response.text().replace(/```json|```/g, '').trim()
    return JSON.parse(text)
  } catch {
    return {
      projectName: 'generated-app',
      files: [{ path: 'app/page.tsx', purpose: 'main landing' }],
      fallback: true
    }
  }
}
