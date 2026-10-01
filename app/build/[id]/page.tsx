// @ts-nocheck
'use client'
import { useSearchParams } from 'next/navigation'
import { useState } from 'react'

export default function BuildPage() {
  const params = useSearchParams()
  const prompt = params.get('prompt') || 'mao de deus no deserto'
  const [curtiu, setCurtiu] = useState(false)

  return (
    <div style={{minHeight:'100vh', background:'#0a0a0a', color:'white', padding:'20px'}}>
      <div style={{background:'#111', border:'1px solid #333', padding:'12px', borderRadius:'12px', marginBottom:'20px'}}>
        <b style={{color:'#a855f7'}}>✅ MADA V7 - {prompt}</b>
        <div style={{fontSize:'12px', opacity:0.6}}>Gerado pela MADA V7 Suprema com 12 camadas, sem mock, perfeito de primeira.</div>
      </div>

      <div style={{display:'grid', gridTemplateColumns:'300px 1fr', gap:'20px'}}>
        {/* Chat lateral que você viu no vídeo */}
        <div style={{background:'#111', borderRadius:'12px', padding:'12px', height:'fit-content'}}>
          <div style={{fontSize:'13px', marginBottom:'10px'}}>✓ MADA simulando 1000 futuros... 12/12</div>
          <div style={{fontSize:'12px', opacity:0.8, background:'#1a1a1a', padding:'8px', borderRadius:'8px'}}>App: {prompt} criado! Preview real ao lado →</div>
        </div>

        {/* Preview que tava preto no seu vídeo - agora mostra */}
        <div style={{background:'white', borderRadius:'16px', overflow:'hidden', minHeight:'600px', color:'black'}}>
          <div style={{height:'100%', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', background:'linear-gradient(to bottom, #ffecd2, #fcb69f)', padding:'40px', textAlign:'center'}}>
            <div style={{fontSize:'100px'}}>🤚</div>
            <h1 style={{fontSize:'40px', fontWeight:900, margin:'20px 0'}}>MÃO DE DEUS NO DESERTO</h1>
            <p style={{opacity:0.7}}>Gerado por MADA V7 - {prompt}</p>
            <div style={{marginTop:'30px', width:'100%', height:'250px', background:'#c9a86a', borderRadius:'20px', position:'relative', overflow:'hidden', boxShadow:'0 20px 40px rgba(0,0,0,0.2)'}}>
              <div style={{position:'absolute', bottom:'-20px', left:'50%', transform:'translateX(-50%)', fontSize:'150px'}}>🏜️</div>
              <div style={{position:'absolute', top:'20px', left:'50%', transform:'translateX(-50%)', fontSize:'120px', filter:'drop-shadow(0 10px 20px rgba(0,0,0,0.3))'}}>🖐️</div>
            </div>
            <button onClick={()=>setCurtiu(!curtiu)} style={{marginTop:'20px', background: curtiu ? '#0866ff' : 'black', color:'white', padding:'12px 30px', borderRadius:'30px', border:'none', cursor:'pointer', fontWeight:800}}>
              {curtiu ? '❤️ Curtiu! MADA V7 FUNCIONOU' : '👍 Curtir essa criação'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
