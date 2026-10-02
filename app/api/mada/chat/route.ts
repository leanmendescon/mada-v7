import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(req: NextRequest) {
  try {
    const { prompt } = await req.json();
    const finalPrompt = prompt || "landing page de hamburgueria premium";

    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json({
        code: `export default function App(){return <div className="min-h-screen bg-black text-white p-10"><h1 className="text-5xl font-black">${finalPrompt}</h1><p className="mt-4 opacity-60">Falta GEMINI_API_KEY na Vercel</p></div>}`,
      });
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-exp" });

    const systemPrompt = `
Você é o MADA V7 SUPREMA, melhor que Lovable. Gere UMA landing page completa em React + Tailwind.
REGRAS OBRIGATÓRIAS:
- Retorne SÓ código React, sem explicação, sem markdown
- Use: export default function App() { return (...) }
- Design PREMIUM, dark mode, moderno, gradientes rosa/roxo #ff0055, bordas 24px
- Se for hamburgueria/clinica, crie preços, depoimentos, tudo completo
- Código tem que funcionar direto, sem imports extras
CRIE: ${finalPrompt}
`;

    const result = await model.generateContent(systemPrompt);
    let code = result.response.text();
    code = code.replace(/```jsx|```tsx|```javascript|```js|```/g, "").trim();

    return NextResponse.json({ code, real: true });
  } catch (e: any) {
    console.error(e);
    return NextResponse.json({ error: e.message, code: `<div>Erro IA: ${e.message}</div>` }, { status: 500 });
  }
}
