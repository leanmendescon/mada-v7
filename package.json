import { GoogleGenerativeAI } from '@google/generative-ai'

const genAI = new GoogleGenerativeAI(
  process.env.GOOGLE_API_KEY || 
  process.env.GEMINI_API_KEY || 
  ''
)

export async function runResearcher(prompt: string) {
  const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' })
  
  const systemPrompt = `Você é o RESEARCHER do NEXUS V8.
Analise o pedido e retorne JSON puro com:
{
  "intent": "o que o usuario quer",
  "stack": ["tecnologias"],
  "features": ["funcionalidades"],
  "complexity": "low|medium|high"
}
Pedido: ${prompt}
Retorne APENAS JSON válido, sem markdown.`

  try {
    const result = await model.generateContent(systemPrompt)
    const text = result.response.text().replace(/```json|```/g, '').trim()
    return JSON.parse(text)
  } catch (e) {
    console.error('Researcher error', e)
    return {
      intent: prompt,
      stack: ['nextjs', 'react', 'tailwind'],
      features: ['landing page'],
      complexity: 'medium',
      fallback: true
    }
  }
}
