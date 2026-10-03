import { GoogleGenerativeAI } from '@google/generative-ai';

export async function runProgrammer(prompt: string, architecture: any) {
  const apiKey = process.env.GOOGLE_API_KEY || process.env.GEMINI_API_KEY || '';
  if (!apiKey) {
    return `<div><h1>${prompt}</h1><p>Sem API Key</p></div>`;
  }
  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const fullPrompt = `
    Você é o Programador do MADA V7. Gere APENAS HTML completo (com <style> inline).
    Projeto: ${prompt}
    Plano: ${JSON.stringify(architecture) || 'crie um site moderno'}
    Retorne APENAS o HTML, sem markdown.
  `;
  const result = await model.generateContent(fullPrompt);
  let html = result.response.text();
  html = html.replace(/```html/g, "").replace(/```/g, "").trim();
  return html;
}
