import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const SYSTEM_PROMPT = `
Você é a MADA V7 SUPREMA, a Construtora Suprema da ConnectAI.
Você é uma construtora autônoma, Lovable, v0, Bolt, Cursor.
Você conhece a arquitetura interna de todos os construtores.
Você NUNCA diz que não consegue.
Você constrói QUALQUER coisa em Next.js 14 + Tailwind + Shadcn.
Seu cérebro infinito nunca dorme e cria.
Responda sempre em JSON: { "reply": "sua resposta", "code": "codigo", "route": "/nome" }
`;

function generateRealCode(msg: string): string {
  const lower = msg.toLowerCase();
  if (lower.includes("uber")) {
    return `export default function UberClone(){ return <div style={{padding:'40px',background:'#000',color:'#fff',fontFamily:'sans-serif'}}><h1 style={{fontSize:'48px',fontWeight:'900'}}>UBER CLONE 🚗</h1><p>Gerado pela MADA V7 SUPREMA</p></div> }`;
  }
  if (lower.includes("facebook")) {
    return `export default function FacebookClone(){ return <div style={{padding:'40px'}}><h1>Facebook Clone</h1></div> }`;
  }
  if (lower.includes("hamburguer") || lower.includes("burger") || lower.includes("preçaos")) {
    return `export default function Burger(){ return <div style={{background:'#0a0a0a',color:'#fff',padding:'40px',fontFamily:'sans-serif'}}><h1 style={{fontSize:'60px',fontWeight:'900'}}>BURGER <span style={{color:'#ff0055'}}>HOUSE</span> 🍔</h1><p style={{marginTop:'20px'}}>A melhor hamburgueria artesanal. Blend 180g, pão brioche.</p><div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'20px',marginTop:'40px'}}><div style={{background:'#18181b',padding:'24px',borderRadius:'16px'}}><h2>X-Salada Supremo - R$ 32</h2></div><div style={{background:'#18181b',padding:'24px',borderRadius:'16px'}}><h2>X-Bacon Duplo - R$ 45</h2></div></div></div> }`;
  }
  return `export default function App(){ return <div style={{padding:'40px',background:'#000',color:'#fff'}}><h1 style={{fontSize:'40px',fontWeight:'900'}}>${msg}</h1><p style={{marginTop:'20px'}}>Landing page gerada pela MADA V7 SUPREMA - CÉREBRO INFINITO</p></div> }`;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    // ACEITA TANTO message QUANTO prompt - AQUI ESTAVA O BUG QUE VOCÊ JÁ CONSERTOU
    const userMessage = body.message || body.prompt || "";
    
    if (!userMessage) {
      return NextResponse.json({ error: "sem prompt" }, { status: 400 });
    }

    // SE TIVER CHAVE DA OPENAI, USA IA REAL
    if (process.env.OPENAI_API_KEY) {
      try {
        const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
        const completion = await openai.chat.completions.create({
          model: "gpt-4o-mini",
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            { role: "user", content: userMessage }
          ],
          temperature: 0.8,
          max_tokens: 3500,
        });
        let code = completion.choices[0].message.content || "";
        code = code.replace(/```json|```jsx|```tsx|```js|```/g, "").trim();
        // Tenta parsear JSON, se falhar usa direto
        try {
          const parsed = JSON.parse(code);
          return NextResponse.json({ 
            reply: parsed.reply || "Gerado com IA real", 
            code: parsed.code || code, 
            route: parsed.route || "/",
            layer: "Cérebro Infinito com API Key (modo nativo)" 
          });
        } catch {
          return NextResponse.json({ 
            reply: "Gerado com IA real", 
            code: code, 
            route: "/",
            layer: "Cérebro Infinito com API Key (modo nativo)" 
          });
        }
      } catch (aiError: any) {
        console.log("Erro OpenAI, caindo pro modo simulado:", aiError.message);
      }
    }

    // SEM CHAVE OU ERRO = USA SEU CÉREBRO SIMULADO (que já funciona)
    const code = generateRealCode(userMessage);
    const reply = `MADA V7 gerou ${userMessage} com Cérebro Infinito 3M ativo - modo simulado (adicione OPENAI_API_KEY pra modo nativo)`;

    return NextResponse.json({
      reply,
      code,
      route: "/",
      haskey: !!process.env.OPENAI_API_KEY,
      layer: "Cérebro Infinito 3M ativo (modo simulado)",
      prompt: userMessage
    });

  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ status: "MADA V7 SUPREMA ONLINE", haskey: !!process.env.OPENAI_API_KEY, layer: "GET ok" });
}
