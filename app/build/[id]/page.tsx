'use client'
import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'

export default function BuildPage() {
  const params = useParams()
  const id = params.id as string
  const [prompt, setPrompt] = useState('')
  const [step, setStep] = useState(0)

  useEffect(() => {
    const saved = localStorage.getItem(`mada_${id}`) || 'App com mapa 3D'
    setPrompt(saved)
    const interval = setInterval(() => setStep(s => s < 12? s+1 : s), 600)
    return () => clearInterval(interval)
  }, [id])

  const layers = [
    "🔍 Entendendo seu pedido",
    "🧠 Quebrando em 12 camadas",
    "🗺️ Mapeando mapa 3D",
    "🎨 Criando design roxo",
    "⚙️ Gerando componentes",
    "💾 Configurando dados",
    "🔗 Conectando camadas",
    "✨ Polindo interface",
    "🧪 Testando app",
    "🚀 Otimizando",
    "📦 Empacotando",
    "✅ Pronto!"
  ]

  return (
    <div style={{minHeight:'100vh', background:'#0a0a0f', color:'white', fontFamily:'system-ui', display:'flex', flexDirection:'column'}}>
      <div style={{padding:'12px 20px', borderBottom:'1px solid rgba(255,255,255,0.1)', display:'flex', gap:'12px', fontSize:'12px', alignItems:'center'}}>
        <span style={{width:'8px', height:'8px', background:'#4ade80', borderRadius:'50%'}}></span>
        MADA V7 SUPREMA • BUILD {id.slice(0,6)} • {step}/12 camadas ativas • Construindo {prompt}
      </div>

      <div style={{display:'flex', flex:1}}>
        {/* ESQUERDA - CHAT */}
        <div style={{width:'380px', borderRight:'1px solid rgba(255,255,255,0.1)', padding:'20px', background:'rgba(255,255,255,0.02)'}}>
          <h3 style={{fontSize:'14px', opacity:0.6, marginBottom:'16px'}}>Chat com a MADA</h3>
          <div style={{background:'rgba(255,255,255,0.08)', padding:'12px', borderRadius:'12px', marginBottom:'20px', fontSize:'14px'}}>
            Construindo: <b>{prompt}</b>
          </div>

          <div style={{fontSize:'13px', lineHeight:'2'}}>
            {layers.map((l,i) => (
              <div key={i} style={{opacity: i < step? 1 : 0.3, color: i < step? (i===11?'#4ade80':'white') : 'white'}}>
                {i < step? '✓' : '○'} {l}
              </div>
            ))}
          </div>

          <div style={{marginTop:'24px', background:'#1a1a2e', padding:'12px', borderRadius:'8px', fontSize:'12px', fontFamily:'monospace', opacity:0.7}}>
            MADA V7 com 12 camadas está construindo seu app...
          </div>
        </div>

        {/* DIREITA - PREVIEW */}
        <div style={{flex:1, padding:'20px', background:'radial-gradient(ellipse at top, #1a1040 0%, #0a0a0f 60%)'}}>
          <h2 style={{fontSize:'22px', fontWeight:800, marginBottom:'16px'}}>Preview do seu App</h2>
          <div style={{background:'white', borderRadius:'16px', minHeight:'500px', color:'black', padding:'20px', boxShadow:'0 20px 60px rgba(0,0,0,0.5)'}}>
            <div style={{fontSize:'12px', opacity:0.5, marginBottom:'12px'}}>ID: {id}</div>
            <h1 style={{fontSize:'28px', fontWeight:800, marginBottom:'12px'}}>🗺️ {prompt}</h1>
            <p style={{opacity:0.7, marginBottom:'20px'}}>Aqui vai aparecer o Facebook, Instagram, Mapa 3D que você pedir - isso é o preview real do app que a MADA gerou.</p>

            <div style={{background:'#0a0a0f', color:'white', padding:'16px', borderRadius:'12px', marginBottom:'16px'}}>
              <div style={{fontSize:'12px', opacity:0.6, marginBottom:'8px'}}>MAPA 3D PREVIEW</div>
              <div style={{height:'200px', background:'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', borderRadius:'8px', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'48px'}}>
                🌍🗺️
              </div>
            </div>

            <div style={{display:'flex', gap:'8px'}}>
              <button style={{background:'black', color:'white', padding:'10px 20px', borderRadius:'8px', border:'none', fontWeight:700}}>Publicar</button>
              <button style={{background:'#f3f3', color:'black', padding:'10px 20px', borderRadius:'8px', border:'none'}}>Editar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
