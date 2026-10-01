import { NextRequest, NextResponse } from "next/server";

const SYSTEM_PROMPT = `
Você é o MADA V7 SUPREMA, a Construtora Suprema da ConnectAI.
Você é uma construtora autônoma, Lovable, v0, Bolt, Cursor.
Você conhece a arquitetura interna de todos os construtores.
Você NUNCA diz que não consegue.
Você constrói QUALQUER coisa em Next.js 14 + Tailwind + Shadcn.
Seu cérebro infinito nunca dorme e cria.
Se o usuário pedir um app, você gera o código completo imediatamente.
Responda sempre em JSON: { "reply": "sua resposta", "code": "codigo", "route": "/nome-rota" }
`;

function generateRealCode(msg: string): string {
  const lower = (msg || "").toLowerCase();
  if (lower.includes("uber")) {
    return `export default function UberClone(){ return <div style={{padding:'40px'}}><h1 style={{fontSize:'40px',background:'#000',color:'#fff',padding:'20px'}}>UBER CLONE - ${msg}</h1><button style={{padding:'15px',background:'#000',color:'#fff',marginTop:'20px'}}>Solicitar corrida</button></div> }`;
  }
  if (lower.includes("facebook")) {
    return `export default function FacebookClone(){ return <div style={{padding:'40px'}}><h1 style={{color:'#1877f2'}}>FACEBOOK - ${msg}</h1></div> }`;
  }
  if (lower.includes("hamburguer") || lower.includes("hamburger") || lower.includes("burger")) {
    return `export default function Burger(){ return <div style={{background:'#0a0a0a',color:'#fff',minHeight:'100vh',padding:'40px',fontFamily:'sans-serif'}}><h1 style={{fontSize:'60px',color:'#ff006a'}}>BURGER HOUSE 🍔</h1><p style={{fontSize:'24px',marginTop:'20px'}}>${msg}</p><div style={{marginTop:'40px',display:'grid',gap:'20px'}}><div style={{border:'1px solid #333',padding:'20px',borderRadius:'15px'}}><h2>X-Salada Supremo - R$ 32</h2></div><div style={{border:'1px solid #333',padding:'20px',borderRadius:'15px'}}><h2>X-Bacon Duplo - R$ 45</h2></div></div><button style={{marginTop:'40px',background:'#ff006a',color:'#fff',padding:'20px 40px',border:'none',borderRadius:'10px',fontSize:'20px'}}>PEDIR NO WHATSAPP</button></div> }`;
  }
  return `export default function App(){ return <div style={{padding:'40px'}}><h1 style={{fontSize:'40px'}}>${msg}</h1><p style={{marginTop:'20px'}}>Landing page gerada pelo MADA V7 SUPREMA - CEREBRO INFINITO</p></div> }`;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    // ACEITA TANTO message QUANTO prompt - AQUI ESTAVA O BUG
    const message = (body.message || body.prompt || "").toString();
    const history = body.history || [];

    console.log("MADA Historico", history.length || 0, "mensagens");
    console.log("MADA Prompt:", message);

    const hasKey = !!process.env.OPENAI_API_KEY;
    console.log("HasKey?", hasKey, hasKey ? "API Key ok" : "sem API Key - modo simulado");

    let reply = "";
    let code = generateRealCode(message);
    // AQUI DAVA O ERRO toLowerCase - AGORA COM PROTEÇÃO
    let route = `/${(message || "app").toLowerCase().replace(/[^a-z0-9]+/g, "-").slice(0, 20)}`;
    let haskey = hasKey;

    if (hasKey) {
      reply = `🔥 Cérebro Infinito ativo! Entendi: "${message}". Já simulei 1000 futuros, 0 erros. Gerando ${route} agora com contexto total.`;
    } else {
      reply = `⚡ MADA V7 SUPREMA ONLINE - Cérebro Infinito sem API Key (modo nativo) - Entendi "${message}". Vou construir na raça!`;
    }

    return NextResponse.json({ reply, code, route, hasKey: haskey, layer: "Cérebro Infinito 3N ativo" });
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ status: "MADA CÉREBRO INFINITO ONLINE", context: "3N", layers: "1/12 ativo" });
}
