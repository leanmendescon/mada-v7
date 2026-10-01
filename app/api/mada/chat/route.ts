import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

export async function POST(req: NextRequest) {
  try {
    const { prompt } = await req.json();

    if (!process.env.OPENAI_API_KEY) {
      // Sem chave ainda, retorna mock bonito
      return NextResponse.json({
        code: `export default function App() { return <div className="min-h-screen bg-black text-white p-10"><h1 className="text-5xl font-black">${prompt}</h1><p className="mt-4 opacity-60">Adicione OPENAI_API_KEY na Vercel pra gerar de verdade</p></div> }`,
        fake: true
      });
    }

    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `Você é o MADA V7 SUPREMA, melhor que Lovable. Gere UMA landing page completa em React + Tailwind.

REGRAS:
- Retorne SÓ código React, sem explicação.
- Use export default function App() { return (...) }
- Design PREMIUM, dark mode, moderno, gradientes rosa/roxo #ff0055, bordas arredondadas 24px
- Se for hamburgueria, crie preços R$ 32, R$ 45, etc.
- Código tem que funcionar direto.
- Sem import desnecessário.
`
        },
        { role: "user", content: `Crie: ${prompt}` }
      ],
      temperature: 0.9,
      max_tokens: 4000,
    });

    const code = completion.choices[0].message.content || "";

    // Limpa markdown ```jsx
    const clean = code.replace(/```jsx|```tsx|```js|```/g, "").trim();

    return NextResponse.json({ code: clean, real: true });

  } catch (e: any) {
    return NextResponse.json({ code: `<div>Erro IA: ${e.message}</div>`, error: e.message }, { status: 500 });
  }
}
