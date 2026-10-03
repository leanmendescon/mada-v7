import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function runProgrammer(prompt: string, plan?: string) {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const fullPrompt = `
    Você é o Programador do MADA V7. Gere APENAS HTML completo (com <style> inline).
    Projeto: ${prompt}
    Plano: ${plan || 'Crie um site moderno'}
    Retorne APENAS o HTML, sem markdown.
  `;
  const result = await model.generateContent(fullPrompt);
  let html = result.response.text();
  html = html.replace(/```html/g, "").replace(/```/g, "").trim();
  return html;
}