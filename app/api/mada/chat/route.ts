import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(req: NextRequest) {
  try {
    const { prompt } = await req.json();
    const finalPrompt = prompt || "landing page de hamburgueria premium";

    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json({
        code: `export default function App(){return <div className="min-h-screen bg-black text-white p-10"><h1 className="text-5xl font-black">${finalPrompt}</h1></div>}`,
      });
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-exp" });

    const result = await model.generateContent(`Você é o MADA V7 SUPREMA. Gere UMA landing page completa em React + Tailwind. Só código, sem explicação. Use export default function App(). Design PREMIUM dark mode rosa/roxo #ff0055. Crie: ${finalPrompt}`);
    let code = result.response.text().replace(/```jsx|```tsx|```js|```/g, "").trim();

    return NextResponse.json({ code, real: true });
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
