import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(req: NextRequest) {
  try {
    const { prompt } = await req.json();
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-exp" });

    const systemPrompt = `
Você cria landing pages. TEMA: ${prompt}

PROIBIDO: emoji, "BURGER HOUSE", "X-Salada", hambúrguer se o tema não for hambúrguer.

OBRIGATÓRIO:
- Se tema for barbearia: título BARBEARIA PREMIUM, use fotos https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600 e https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600
- Se tema for estética/clínica/mulher: use https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600
- Sempre 3x <img src="URL REAL" className="w-full h-64 object-cover rounded-3xl" />
- Design: bg-black text-white cards bg-zinc-900 rounded-[32px]
- Só export default function App()
`;

    const result = await model.generateContent(systemPrompt);
    let code = result.response.text().replace(/```[a-z]*|```/g, "").trim();
    return NextResponse.json({ code });
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
