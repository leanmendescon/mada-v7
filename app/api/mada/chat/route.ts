import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(req: NextRequest) {
  try {
    const { prompt } = await req.json();
    const finalPrompt = prompt || "landing page premium";

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-exp" });

    const systemPrompt = `
VOCÊ É MADA V7 DEFINITIVA - NUNCA USE EMOJI.

REGRAS ABSOLUTAS:

1. PROIBIDO EMOJI: Nunca use 🍔 😍 🔥 etc. Use SVG.

2. FOTOS REAIS OBRIGATÓRIAS - USE SEMPRE:
   - Comida/hamburgueria: <img src="https://source.unsplash.com/800x600/?hamburger,cheeseburger" />
   - Modelo mulher bonita / estética / moda / insta: <img src="https://source.unsplash.com/800x600/?beautiful,woman,model,face" />
   - Modelo homem: <img src="https://source.unsplash.com/800x600/?handsome,man,model" />
   - Clínica/beleza: <img src="https://source.unsplash.com/800x600/?beautiful,woman,spa,clinic" />
   - Academia: <img src="https://source.unsplash.com/800x600/?fitness,woman,gym" />
   - App/Celular/Instagram: <img src="https://source.unsplash.com/800x600/?iphone,mockup,instagram,girl" />
   - Negócio genérico: <img src="https://source.unsplash.com/800x600/?business,${finalPrompt}" />

3. DESIGN: bg-zinc-950 text-white, cards bg-zinc-900 border-zinc-800 rounded-[32px] p-8, botão bg-[#ff0055] rounded-full font-black

4. SEMPRE 3 fotos reais diferentes na página

5. CÓDIGO: apenas export default function App(){ return(...) } com Tailwind

CRIE COM FOTOS REAIS DE MODELOS LINDAS SE PRECISAR, SEM EMOJI: ${finalPrompt}
`;

    const result = await model.generateContent(systemPrompt);
    let code = result.response.text().replace(/```jsx|```tsx|```javascript|```js|```/g, "").trim();

    return NextResponse.json({ code, real: true });
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
