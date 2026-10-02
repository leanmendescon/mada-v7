import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(req: NextRequest) {
  try {
    const { prompt } = await req.json();
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-exp" });

    const systemPrompt = `
VOCÊ É MADA V7.3 GERAL - PROIBIDO EMOJI, SÓ FOTO REAL.

BANCO DE FOTOS REAIS - USE DE ACORDO COM O TEMA:
- HAMBURGUERIA/BURGER: https://images.unsplash.com/photo-1568909344668-6f14a07b56a0?w=600 , https://images.unsplash.com/photo-1550547660-d9450f859349?w=600 , https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=600
- BELEZA/MODELO/MULHER/CLINICA ESTETICA/INSTAGRAM: https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600 , https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600 , https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600
- ACADEMIA/FITNESS: https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600 , https://images.unsplash.com/photo-1594381898411-846e7d193883?w=600
- BARBEARIA/HOMEM: https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600 , https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600
- ADVOGADO/ESCRITORIO: https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600
- RESTAURANTE/COMIDA: https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600
- LOJA/ROUPA/MODA: https://images.unsplash.com/photo-1445205170230-053b83016050?w=600

REGRA: Identifique o tema de "\${prompt}" e use 3 fotos REAIS do banco acima. Coloque <img src="URL" className="w-full h-72 object-cover rounded-[24px] shadow-2xl" />

DESIGN PREMIUM: bg-zinc-950 text-white, cards bg-zinc-900 border border-zinc-800 rounded-[32px] p-8

TEMA PARA CRIAR: \${prompt}
Retorne só: export default function App(){ return(...) }
`;

    const result = await model.generateContent(systemPrompt);
    let code = result.response.text().replace(/```[a-z]*|```/g, "").trim();
    return NextResponse.json({ code });
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
