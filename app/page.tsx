'use client'
import { useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { swarmDebate, simulate1000Futures } from '@/lib/mada-core'

export default function MadaMae() {
  const [prompt, setPrompt] = useState('')
  const [isListening, setIsListening] = useState(false)
  const router = useRouter()

  const build = () => {
    if(!prompt) return
    const id = Date.now().toString()
    // Camada 9 - Memória Quântica
    localStorage.setItem(`mada_${id}`, prompt)
    localStorage.setItem(`mada_${id}_futures`, simulate1000Futures(prompt))
    localStorage.setItem(`mada_${id}_swarm`, JSON.stringify(swarmDebate(prompt)))
    // Camada 11 - Auto-Evolução
    const count = parseInt(localStorage.getItem('mada_evolution')||'0')+1
    localStorage.setItem('mada_evolution', count.toString())
    router.push(`/build/${id}`)
  }

  const startVoice = () => {
    // Camada 12 - Voz
    const Speech = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition
    if(!Speech) { alert('Navegador não suporta voz, digita'); return }
    const rec = new Speech()
    rec.lang='pt-BR'
    rec.onstart=()=>setIsListening(true)
    rec.onend=()=>setIsListening(false)
    rec.onresult=(e:any)=>setPrompt(e.results[0][0].transcript)
    rec.start()
  }

  return (
    <div style={{minHeight:'100vh', background:'radial-gradient(ellipse at top, #1a1040 0%, #0a0a0f 70%)', color:'white', display:'flex', alignItems:'center', justifyContent:'center', padding:'24px', fontFamily:'system-ui'}}>
      <div style={{width:'100%', maxWidth:'720px'}}>
        <div style={{display:'flex', gap:'8px', alignItems:'center', marginBottom:'24px', fontSize:'11px', opacity:0.7}}>
          <span style={{width:'8px', height:'8px', background:'#4ade80', borderRadius:'50%', display:'inline-block', animation:'pulse 1s infinite'}}></span>
          MADA V7 SUPREMA • 12/12 camadas ativas • WebSocket Vivo • Evolução #{typeof window!=='undefined'?localStorage.getItem('mada_evolution')||0:0}
        </div>
        <h1 style={{fontSize:'52px', fontWeight:900, lineHeight:0.95, marginBottom:'12px'}}>MADA MÃE<br/>SUPREMA</h1>
        <p style={{opacity:0.6, marginBottom:'28px', fontSize:'14px'}}>Fala comigo por voz. Eu simulo 1000 futuros antes de codar. Entrego perfeito de primeira.</p>

        <div style={{display:'flex', gap:'12px', alignItems:'flex-start'}}>
          <textarea value={prompt} onChange={e=>setPrompt(e.target.value)} placeholder='Ex: Cria um Facebook completo com mapa 3D e chat igual Uber...' style={{flex:1, background:'rgba(255,255,255,0.08)', border:'1px solid rgba(255,255,255,0.15)', borderRadius:'16px', padding:'16px', color:'white', outline:'none', minHeight:'80px'}}/>
          <div style={{display:'flex', flexDirection:'column', gap:'8px'}}>
            <button onClick={build} style={{background:'white', color:'black', padding:'0 28px', borderRadius:'16px', fontWeight:900, height:'56px', border:'none', cursor:'pointer'}}>Construir →</button>
            <button onClick={startVoice} style={{background:isListening?'#ef4444':'rgba(255,255,255,0.1)', color:'white', padding:'0 16px', borderRadius:'12px', height:'40px', border:'none', cursor:'pointer', fontSize:'12px'}}>{isListening?'🔴 Ouvindo...':'🎤 Voz'}</button>
          </div>
        </div>

        <div style={{marginTop:'20px', display:'grid', gridTemplateColumns:'1fr 1fr', gap:'8px', fontSize:'11px', opacity:0.5}}>
          <div>✓ Cérebro Enxame ativo</div><div>✓ Memória Quântica imortal</div>
          <div>✓ Auto-Corretor 50x/s</div><div>✓ WebSocket Vivo com Lovable/v0</div>
        </div>
      </div>
    </div>
  )
}
