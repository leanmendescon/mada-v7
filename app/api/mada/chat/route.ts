import { NextRequest, NextResponse } from "next/server";

function slugify(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .slice(0, 40) || "projeto";
}

function brandMeta(prompt: string) {
  const p = prompt.toLowerCase();

  if (p.includes("hamburg") || p.includes("burger") || p.includes("lanches")) {
    return {
      name: "Burger House",
      phrase: "Sabor que conquista o dia",
      accent: "#f97316",
      accent2: "#ef4444",
      section: "Cardápio premium",
      button: "Ver menu",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=80",
    };
  }

  if (p.includes("barbear") || p.includes("corte") || p.includes("estilo")) {
    return {
      name: "Barber Club",
      phrase: "Estilo impecável, corte de alto nível",
      accent: "#a78bfa",
      accent2: "#60a5fa",
      section: "Atendimento premium",
      button: "Agendar horário",
      image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=80",
    };
  }

  if (p.includes("beauty") || p.includes("estética") || p.includes("clinic") || p.includes("mulher")) {
    return {
      name: "Luna Beauty",
      phrase: "Beleza, cuidado e confiança em cada detalhe",
      accent: "#f472b6",
      accent2: "#fb7185",
      section: "Cuidados personalizados",
      button: "Fazer avaliação",
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80",
    };
  }

  return {
    name: "Nova Era",
    phrase: "Transforme sua ideia em uma presença incrível",
    accent: "#8b5cf6",
    accent2: "#ec4899",
    section: "A solução que seu negócio precisa",
    button: "Quero começar",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
  };
}

function buildLandingPage(prompt: string): string {
  const meta = brandMeta(prompt);
  const brandName = meta.name;
  const slug = slugify(prompt);

  return `<!DOCTYPE html>
  <html lang="pt-BR">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>${brandName}</title>
      <style>
        :root {
          --primary: ${meta.accent};
          --secondary: ${meta.accent2};
          --bg: #0b0b12;
          --panel: #121826;
          --panel-soft: #171b2b;
          --text: #f8fafc;
          --muted: #cbd5e1;
          --line: rgba(255,255,255,0.08);
        }

        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body {
          margin: 0;
          font-family: Inter, Arial, sans-serif;
          background: radial-gradient(circle at top, rgba(139,92,246,0.18), transparent 28%), var(--bg);
          color: var(--text);
          line-height: 1.6;
        }

        a { text-decoration: none; }
        img { max-width: 100%; display: block; }

        .container {
          width: min(1180px, calc(100% - 32px));
          margin: 0 auto;
        }

        .topbar {
          position: sticky;
          top: 0;
          z-index: 10;
          backdrop-filter: blur(16px);
          background: rgba(11, 11, 18, 0.7);
          border-bottom: 1px solid var(--line);
        }

        .nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 18px 0;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 12px;
          font-weight: 800;
          letter-spacing: 0.04em;
        }

        .brand-mark {
          width: 34px;
          height: 34px;
          border-radius: 12px;
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          display: grid;
          place-items: center;
          font-weight: 900;
          color: white;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 22px;
          color: var(--muted);
          font-size: 14px;
        }

        .cta-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 14px 22px;
          border-radius: 999px;
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          color: white;
          font-weight: 700;
          border: none;
          box-shadow: 0 18px 36px rgba(168,85,247,0.25);
        }

        .hero {
          padding: 72px 0 44px;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 28px;
          align-items: center;
        }

        .eyebrow {
          display: inline-block;
          padding: 8px 14px;
          border-radius: 999px;
          background: rgba(255,255,255,0.04);
          border: 1px solid var(--line);
          color: var(--muted);
          font-size: 12px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin-bottom: 14px;
        }

        h1 {
          font-size: clamp(2.6rem, 4vw, 5rem);
          line-height: 0.95;
          margin: 0 0 18px;
          letter-spacing: -0.06em;
        }

        .gradient-text {
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .lead {
          font-size: 1.06rem;
          color: var(--muted);
          max-width: 620px;
          margin-bottom: 26px;
        }

        .hero-actions {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          margin-bottom: 26px;
        }

        .stats {
          display: flex;
          gap: 24px;
          flex-wrap: wrap;
          color: var(--muted);
          font-size: 14px;
        }

        .stat strong {
          display: block;
          color: var(--text);
          font-size: 1.5rem;
        }

        .hero-card {
          background: linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02));
          border: 1px solid var(--line);
          border-radius: 28px;
          padding: 16px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.28);
        }

        .hero-card img {
          border-radius: 22px;
          height: 520px;
          object-fit: cover;
          width: 100%;
        }

        .mini-card {
          background: rgba(17,24,39,0.9);
          border: 1px solid var(--line);
          border-radius: 18px;
          padding: 18px;
          margin-top: 18px;
        }

        .mini-card strong {
          display: block;
          margin-bottom: 8px;
        }

        section {
          padding: 40px 0;
        }

        .section-title {
          font-size: clamp(2rem, 3vw, 3rem);
          margin: 0 0 14px;
          letter-spacing: -0.05em;
        }

        .section-sub {
          color: var(--muted);
          margin: 0 0 26px;
          max-width: 700px;
        }

        .grid-3 {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .feature {
          background: linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.015));
          border: 1px solid var(--line);
          border-radius: 22px;
          padding: 22px;
        }

        .feature-badge {
          display: inline-block;
          width: 46px;
          height: 46px;
          border-radius: 14px;
          display: grid;
          place-items: center;
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          margin-bottom: 18px;
          font-weight: 800;
        }

        .feature h3 {
          margin: 0 0 8px;
          font-size: 1.25rem;
        }

        .feature p {
          margin: 0;
          color: var(--muted);
        }

        .showcase {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 22px;
          align-items: stretch;
        }

        .showcase-panel {
          background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.015));
          border: 1px solid var(--line);
          border-radius: 26px;
          padding: 20px;
        }

        .showcase-panel img {
          height: 330px;
          object-fit: cover;
          border-radius: 16px;
          width: 100%;
        }

        .list {
          display: grid;
          gap: 14px;
          margin-top: 18px;
        }

        .list-item {
          display: flex;
          align-items: center;
          gap: 12px;
          background: rgba(255,255,255,0.02);
          border: 1px solid var(--line);
          border-radius: 16px;
          padding: 14px 16px;
          color: var(--muted);
        }

        .check {
          width: 26px;
          height: 26px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          display: grid;
          place-items: center;
          font-size: 14px;
          font-weight: 900;
        }

        .cta-banner {
          padding: 26px;
          border-radius: 28px;
          background: linear-gradient(135deg, rgba(168,85,247,0.15), rgba(236,72,153,0.15));
          border: 1px solid var(--line);
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        footer {
          padding: 28px 0 70px;
          color: var(--muted);
          text-align: center;
        }

        @media (max-width: 920px) {
          .hero-grid, .showcase, .grid-3 {
            grid-template-columns: 1fr;
          }

          .nav-links {
            display: none;
          }

          .hero {
            padding-top: 48px;
          }
        }
      </style>
    </head>
    <body>
      <header class="topbar">
        <div class="container nav">
          <div class="brand">
            <div class="brand-mark">M</div>
            <span>${brandName}</span>
          </div>

          <nav class="nav-links">
            <a href="#beneficios">Benefícios</a>
            <a href="#servicos">Serviços</a>
            <a href="#sobre">Sobre</a>
          </nav>

          <a class="cta-button" href="#contato">${meta.button}</a>
        </div>
      </header>

      <main>
        <section class="hero">
          <div class="container hero-grid">
            <div>
              <div class="eyebrow">${meta.section}</div>
              <h1>
                Sua marca precisa de <span class="gradient-text">impacto</span>
                <br />e presença digital.
              </h1>
              <p class="lead">${meta.phrase}</p>
              <div class="hero-actions">
                <a class="cta-button" href="#contato">${meta.button}</a>
                <a class="cta-button" href="#servicos" style="background: transparent; border: 1px solid var(--line); box-shadow: none;">Ver mais</a>
              </div>
              <div class="stats">
                <div class="stat"><strong>+2.8k</strong> clientes atendidos</div>
                <div class="stat"><strong>4.9/5</strong> avaliação</div>
                <div class="stat"><strong>24h</strong> para começar</div>
              </div>
            </div>

            <div class="hero-card">
              <img src="${meta.image}" alt="Capa do projeto" />
              <div class="mini-card">
                <strong>${brandName}</strong>
                <span style="color: var(--muted);">Estratégia visual + presença online para captar clientes mais rápido.</span>
              </div>
            </div>
          </div>
        </section>

        <section id="beneficios">
          <div class="container">
            <h2 class="section-title">Por que ${brandName} funciona?</h2>
            <p class="section-sub">Uma experiência moderna, clara e orientada para conversão, criada para transformar visitas em oportunidades reais de negócio.</p>

            <div class="grid-3">
              <div class="feature">
                <div class="feature-badge">01</div>
                <h3>Design premium</h3>
                <p>Visual elegante com foco em confiança, autoridade e clareza para o cliente.</p>
              </div>
              <div class="feature">
                <div class="feature-badge">02</div>
                <h3>Foco em venda</h3>
                <p>Estrutura pensada para destacar oferta, benefícios e ação do visitante.</p>
              </div>
              <div class="feature">
                <div class="feature-badge">03</div>
                <h3>Resultado rápido</h3>
                <p>Sem complicação: estrutura simples, limpa e pronta para captar oportunidades.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="servicos">
          <div class="container showcase">
            <div class="showcase-panel">
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80" alt="Equipe e estratégias" />
            </div>

            <div class="showcase-panel">
              <h2 class="section-title" style="font-size: clamp(1.8rem, 2.4vw, 2.7rem);">Seu negócio pronto para crescer</h2>
              <div class="list">
                <div class="list-item"><span class="check">✓</span> Estrutura visual profissional</div>
                <div class="list-item"><span class="check">✓</span> Conteúdo otimizado para conversão</div>
                <div class="list-item"><span class="check">✓</span> CTA claro e processo simples</div>
                <div class="list-item"><span class="check">✓</span> Aparência moderna e memorável</div>
              </div>
            </div>
          </div>
        </section>

        <section id="sobre">
          <div class="container">
            <div class="cta-banner" id="contato">
              <div>
                <div style="font-size:12px; letter-spacing:0.12em; text-transform:uppercase; color:#e9d5ff;">Pronto para avançar?</div>
                <h3 style="margin: 8px 0 0; font-size: clamp(1.6rem, 2.5vw, 2.6rem);">Transforme sua ideia em presença real.</h3>
              </div>
              <a class="cta-button" href="mailto:contato@${slug}.com">${meta.button}</a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        © ${new Date().getFullYear()} ${brandName}. Todos os direitos reservados.
      </footer>
    </body>
  </html>`;
}

export async function POST(req: NextRequest) {
  try {
    const { prompt } = await req.json();
    const safePrompt = typeof prompt === "string" ? prompt.trim() : "";
    const finalPrompt = safePrompt || "landing page moderna para um negócio digital";

    const apiKey = process.env.GEMINI_API_KEY;

    if (apiKey) {
      try {
        const generation = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=${apiKey}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              contents: [
                {
                  parts: [
                    {
                      text: `Crie APENAS código HTML completo e pronto para exibir em um navegador para ${finalPrompt}. Não use markdown. Não inclua explicações. Responda apenas com um documento HTML completo com estilo inline e estrutura visual profissional.`,
                    },
                  ],
                },
              ],
            }),
          }
        );

        const data = await generation.json();
        const aiText = data?.candidates?.[0]?.content?.parts?.[0]?.text || "";
        const sanitized = aiText.replace(/```html|```/gi, "").trim();

        if (sanitized.includes("<html") || sanitized.includes("<body")) {
          return NextResponse.json({ code: sanitized, source: "gemini" });
        }
      } catch (error) {
        console.log("Gemini fallback: ", error);
      }
    }

    return NextResponse.json({ code: buildLandingPage(finalPrompt), source: "local" });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Erro ao gerar página" }, { status: 500 });
  }
}
