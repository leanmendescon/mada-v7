import { GoogleGenerativeAI } from "@google/generative-ai";
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
export async function runArchitect(prompt: string) {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const r = await model.generateContent(`Você é o Arquiteto MADA. Plano JSON para: ${prompt}`);
  return r.response.text();
}
