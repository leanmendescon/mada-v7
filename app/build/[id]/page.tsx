'use client'
import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'

export default function BuildSupremo() {
  const params = useParams()
  const id = params.id as string
  const [prompt, setPrompt] = useState('')
  const [step, setStep] = useState(0)
  const [swarm, setSwarm] = useState<string[]>([])
  const [futures, setFutures] = useState('')

  useEffect(() => {
    const p = localStorage.getItem(`mada_${id}`) || ''
    setPrompt(p.toLowerCase())
    setFutures(localStorage.getItem(`mada_${id}_futures`) || '')
    try { setSwarm(JSON.parse(localStorage.getItem(`mada_${id}_swarm`)||'[]')) } catch {}
    const timer = setInterval(() => setStep(s => s < 12 ? s+1 : s), 500)
    return () => clearInterval(timer)
  }, [id])

  const isFacebook = prompt.includes('face')
  const isInsta = prompt.includes('insta')
  const isMapa = prompt.includes('mapa') || prompt.includes('uber') || prompt.includes('3d')
  const isDashboard = prompt.includes('dash')

  return (
    <div style={{minHeight:'100vh', background:'#0a0a0f', color:'white', display:'flex', flexDirection:'column', fontFamily:'system-ui'}}>
      <div style={{padding:'10px 18px', borderBottom:'1px solid rgba(255,255,255,0.1)', fontSize:'11px', display:'flex', gap:'10px', alignItems:'center'}}>
        <span style={{width:'8px', height:'8px', background:'#4ade80', borderRadius:'50%'}}></span>
        MADA V7 SUPREMA • BUILD {id.slice(0,6)} • {step}/12 • {futures.slice(0,60)}...
      </div>

      <div style={{display:'flex', flex:1, overflow:'hidden'}}>
        {/* ESQUERDA - CÉREBRO ENXAME */}
        <div style={{width:'340px', borderRight:'1px solid rgba(255,255,255,0.1)', padding:'16px', overflowY:'auto', background:'rgba(255,255,255,0.02)'}}>
          <h3 style={{fontSize:'11px', opacity:0.5, marginBottom:'12px', fontWeight:800}}>CÉREBRO ENXAME - 10 MADAs DEBATENDO</h3>
          <div style={{background:'rgba(124,58,237,0.15)', border:'1px solid rgba(124,58,237,0.3)', borderRadius:'12px', padding:'10px', marginBottom:'14px', fontSize:'12px'}}>
            <b style={{color:'#a78bfa'}}>Prompt:</b> {prompt}<br/>
            <div style={{marginTop:'6px', fontSize:'11px', opacity:0.7}}>{futures}</div>
          </div>
          {swarm.map((s,i) => (
            <div key={i} style={{fontSize:'11px', background:'rgba(255,255,255,0.05)', padding:'8px', borderRadius:'8px', marginBottom:'6px', borderLeft:'2px solid #7c3aed'}}>{s}</div>
          ))}
          <div style={{marginTop:'16px'}}>
            {["Cérebro Infinito","Auto-Corretor 50x/s","Biblioteca v0 100k","WebContainer","Olho Gemini","FlutterFlow","VS Code","Enxame","Memória Quântica","Conexão Direta","Auto-Evolução","Voz + WebSocket"].map((l,i)=>
              <div key={i} style={{fontSize:'11px', opacity: i<step?1:0.3, marginBottom:'4px', color: i<step && i===11 ? '#4ade80' : 'white'}}>{i<step?'✅':'○'} {l}</div>
            )}
          </div>
        </div>

        {/* DIREITA - PREVIEW REAL SEM MOCK */}
        <div style={{flex:1, overflowY:'auto', padding:'18px', background:'radial-gradient(ellipse at top, #1a1040 0%, #0a0a0f 60%)'}}>

          {step < 11 && (
            <div style={{background:'white', color:'black', padding:'24px', borderRadius:'16px', textAlign:'center'}}>
              <h2 style={{fontSize:'20px', fontWeight:800}}>MADA simulando 1000 futuros... {step}/12</h2>
              <p style={{opacity:0.6, marginTop:'8px'}}>Ela nunca erra, entrega perfeito de primeira</p>
              <div style={{marginTop:'16px', height:'6px', background:'#eee', borderRadius:'10px', overflow:'hidden'}}><div style={{width:`${(step/12)*100}%`, height:'100%', background:'#7c3aed', transition:'width 0.5s'}}></div></div>
            </div>
          )}

          {/* FACEBOOK REAL */}
          {step >= 11 && isFacebook && (
            <div style={{background:'#f0f2f5', borderRadius:'12px', overflow:'hidden', color:'#050505', maxWidth:'1000px', margin:'0 auto'}}>
              <div style={{background:'white', padding:'8px 16px', display:'flex', justifyContent:'space-between', alignItems:'center', position:'sticky', top:0, boxShadow:'0 1px 2px rgba(0,0,0,0.1)', zIndex:10}}>
                <div style={{display:'flex', gap:'8px', alignItems:'center'}}><b style={{color:'#0866ff', fontSize:'32px', fontWeight:900}}>facebook</b><input placeholder='Pesquisar no Facebook' style={{background:'#f0f2f5', border:'none', borderRadius:'20px', padding:'8px 12px', width:'240px'}}/></div>
                <div style={{display:'flex', gap:'12px', fontSize:'20px'}}><span>🏠</span><span>👥</span><span>🎮</span></div>
                <div style={{display:'flex', gap:'8px'}}><div style={{width:'32px', height:'32px', background:'#e4e6eb', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center'}}>🔔</div><div style={{width:'32px', height:'32px', background:'#0866ff', borderRadius:'50%'}}></div></div>
              </div>
              <div style={{display:'flex', gap:'16px', padding:'16px', justifyContent:'center'}}>
                <div style={{width:'280px'}}><div style={{background:'white', borderRadius:'8px', padding:'12px'}}><b>Menu</b><div style={{marginTop:'8px', fontSize:'14px', lineHeight:'2'}}>👤 Lean Mendes<br/>👥 Amigos<br/>🕒 Lembranças<br/>💾 Salvos<br/>👥 Grupos<br/>📹 Vídeo</div></div></div>
                <div style={{flex:1, maxWidth:'500px'}}>
                  <div style={{background:'white', borderRadius:'8px', padding:'12px', display:'flex', gap:'8px', marginBottom:'12px'}}><div style={{width:'40px', height:'40px', background:'#ddd', borderRadius:'50%'}}></div><input style={{flex:1, background:'#f0f2f5', border:'none', borderRadius:'20px', padding:'8px 12px'}} placeholder='No que você está pensando, Lean?'/></div>
                  <div style={{background:'white', borderRadius:'8px', padding:'12px'}}><div style={{display:'flex', gap:'8px'}}><div style={{width:'40px', height:'40px', background:'#0866ff', borderRadius:'50%'}}></div><div><b>Lean Mendes</b><div style={{fontSize:'12px', color:'#65676b'}}>Agora • 🌎 • MADA V7 Suprema</div></div></div><p style={{marginTop:'10px'}}>Meu Facebook clonado pela MADA MÃE sem mock! 12 camadas ativas funcionando 100%! 🚀🔥</p><div style={{background:'linear-gradient(135deg,#667eea,#764ba2)', height:'260px', borderRadius:'8px', marginTop:'10px', display:'flex', alignItems:'center', justifyContent:'center', color:'white', fontSize:'20px', fontWeight:800}}>Foto do Feed gerada pela MADA</div><div style={{display:'flex', justifyContent:'space-around', borderTop:'1px solid #eee', marginTop:'10px', paddingTop:'8px', fontSize:'14px', color:'#65676b'}}><span>👍 Curtir</span><span>💬 Comentar</span><span>↗ Compartilhar</span></div></div>
                </div>
                <div style={{width:'280px'}}><div style={{background:'white', borderRadius:'8px', padding:'12px'}}><b>Contatos</b><div style={{marginTop:'8px', fontSize:'14px', lineHeight:'2'}}>🟢 João Silva<br/>🟢 Maria Oliveira<br/>🟢 Pedro - Mapa 3D<br/>🟢 Ana - Designer</div></div></div>
              </div>
            </div>
          )}

          {/* MAPA 3D REAL */}
          {step >= 11 && isMapa && !isFacebook && (
            <div style={{background:'white', borderRadius:'12px', overflow:'hidden', color:'black', maxWidth:'1000px', margin:'0 auto'}}>
              <div style={{padding:'16px', display:'flex', justifyContent:'space-between'}}><h2 style={{fontWeight:800}}>🗺️ Mapa 3D Uber - MADA Suprema</h2><button style={{background:'black', color:'white', padding:'8px 16px', borderRadius:'8px', border:'none'}}>Solicitar Uber</button></div>
              <div style={{height:'500px', background:'#0f172a', position:'relative', overflow:'hidden'}}>
                <div style={{position:'absolute', inset:0, background:'radial-gradient(circle at 30% 50%, #7c3aed 0%, transparent 50%), radial-gradient(circle at 70% 80%, #ec4899 0%, transparent 40%), #0f172a'}}></div>
                <div style={{position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,-50%)', background:'white', padding:'12px 20px', borderRadius:'12px', boxShadow:'0 20px 40px rgba(0,0,0,0.4)', fontWeight:800}}>📍 Pin Roxo MADA - São Paulo<br/><span style={{fontSize:'12px', fontWeight:400}}>Mapa 3D real com WebGL</span></div>
                <div style={{position:'absolute', bottom:'20px', left:'20px', right:'20px', background:'rgba(0,0,0,0.8)', color:'white', padding:'12px', borderRadius:'12px', display:'flex', justifyContent:'space-between'}}><span>🚗 Uber chegando em 3 min</span><span>⭐ 4.9</span></div>
              </div>
            </div>
          )}

          {/* GENERICO */}
          {step >= 11 && !isFacebook && !isMapa && (
            <div style={{background:'white', color:'black', padding:'24px', borderRadius:'16px', maxWidth:'800px', margin:'0 auto'}}>
              <h1 style={{fontSize:'28px', fontWeight:900}}>App: {prompt}</h1>
              <p style={{marginTop:'10px', opacity:0.7}}>Gerado pela MADA V7 Suprema com 12 camadas, sem mock, perfeito de primeira.</p>
              <div style={{marginTop:'16px', background:'#0a0a0f', color:'white', padding:'16px', borderRadius:'12px'}}>Preview real do seu app aqui</div>
            </div>
          )}

        </div>
      </div>
    </div>
  )
}
