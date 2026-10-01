'use client'
import { useState } from 'react'
import { GOD_MODE } from '@/lib/god-mode'
import { saveQuantum } from '@/lib/quantum-memory'

export default function MADAHome() {
  const [prompt, setPrompt] = useState('')
  const [status, setStatus] = useState('')

  async function handleCreate() {
    if(!prompt) return
    setStatus('👑 GOD MODE ATIVANDO - 10 MADAs debatendo...')
    
    const result = await GOD_MODE(prompt)
    
    saveQuantum(`project_${Date.now()}`, result)
    
    setStatus(result.consenso)
    
    // Cria ID e vai pro build
    const id = Date.now()
    setTimeout(() => {
      window.location.href = `/build/${id}?prompt=${encodeURIComponent(prompt)}`
    }, 1500)
  }

  return (
    <div style={{minHeight:'100vh', background:'black', color:'white', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', padding:'20px'}}>
      <h1 style={{fontSize:'60px', fontWeight:900, background:'linear-gradient(to right, #a855f7, #ec4899)', WebkitBackgroundClip:'text', color:'transparent'}}>MADA V7 SUPREMA</h1>
      <p style={{opacity:0.6, marginBottom:'30px'}}>10/10 CAMADAS ATIVAS - MELHOR QUE LOVABLE</p>
      
      <div style={{width:'100%', maxWidth:'600px', background:'#111', border:'1px solid #333', borderRadius:'16px', padding:'20px'}}>
        <textarea 
          value={prompt}
          onChange={e=>setPrompt(e.target.value)}
          placeholder="O que você quer criar? ex: crie um facebook clone com feed real, mapa 3d uber, dashboard..."
          style={{width:'100%', height:'120px', background:'#000', border:'1px solid #333', borderRadius:'12px', padding:'16px', color:'white', fontSize:'16px'}}
        />
        <button 
          onClick={handleCreate}
          style={{width:'100%', marginTop:'12px', background:'#a855f7', color:'white', padding:'16px', borderRadius:'12px', border:'none', fontWeight:800, fontSize:'16px', cursor:'pointer'}}
        >
          🚀 CRIAR EM MODO DEUS - 0ms
        </button>
        {status && <div style={{marginTop:'16px', background:'#0f0f0f', padding:'12px', borderRadius:'8px', color:'#00ff00', fontSize:'13px', fontFamily:'monospace'}}>{status}</div>}
      </div>

      <div style={{marginTop:'40px', display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:'10px', fontSize:'12px', opacity:0.8}}>
        <div>✅ Cérebro Infinito</div><div>✅ Auto-Corretor 50x/s</div><div>✅ Biblioteca v0 100k</div>
        <div>✅ WebContainer</div><div>✅ Olho Gemini</div><div>✅ FlutterFlow</div>
        <div>✅ VS Code</div><div>✅ Enxame</div><div>✅ Memória Quântica</div>
        <div style={{color:'#a855f7', fontWeight:800}}>👑 GOD MODE ATIVO</div>
      </div>
    </div>
  )
}
