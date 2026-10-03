import { GoogleGenerativeAI } from '@google/generative-ai'

export async function runResearcher(prompt: string) {
  const apiKey = process.env.GOOGLE_API_KEY || process.env.GEMINI_API_KEY || ''
  if (!apiKey) {
    return { intent: prompt, stack: ['nextjs','tailwind'], features: ['landing'], complexity: 'medium', fallback: true }
  }
  const genAI = new GoogleGenerativeAI(apiKey)
  const model = genAI.getGenerativeModel({
    model: 'gemini-1.5-flash',
    generationConfig: { responseMimeType: 'application/json' } as any
  })
  const sys = `Você é o RESEARCHER do NEXUS V8. Retorne JSON: {"intent":"o que usuario quer","stack":["techs"],"features":["funcs"],"complexity":"low|medium|high"} Pedido: ${prompt}`
  try {
    const result = await model.generateContent(sys)
    return JSON.parse(result.response.text().trim())
  } catch (e) {
    console.error('Researcher error', e)
    return { intent: prompt, stack: ['nextjs','react','tailwind'], features: ['landing page'], complexity: 'medium', fallback: true }
  }
}
