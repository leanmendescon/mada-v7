import { GoogleGenerativeAI } from "@google/generative-ai";
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
export async function runProgrammer(prompt: string, plan: string = "") {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const r = await model.generateContent(`Gere APENAS HTML com style inline para: ${prompt} Plano: ${plan}`);
  return r.response.text().replace(/```html|```/g,"").trim();
}
