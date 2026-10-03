import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function runArchitect(prompt: string) {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const result = await model.generateContent(
    `Você é o Arquiteto do MADA. Crie um plano JSON para: ${prompt}. Retorne apenas JSON com { "title", "sections": [] }`
  );
  return result.response.text();
}