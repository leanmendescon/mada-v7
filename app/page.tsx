'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Home() {
  const [prompt, setPrompt] = useState('')
  const router = useRouter()
  const build = () => {
    if(!prompt) return
    const id = Date.now().toString()
    localStorage.setItem(`mada_${id}`, prompt)
    router.push(`/build/${id}`)
  }
  return (
    <div style={{minHeight:'100vh', background:'radial-gradient(ellipse at top, #1a1040 0%, #0a0a0f 70%)', color:'white', display:'flex', alignItems:'center', justifyContent:'center', padding:'24px', fontFamily:'system-ui'}}>
      <div style={{width:'100%', maxWidth:'700px'}}>
        <div style={{display:'flex', alignItems:'center', gap:'8px', fontSize:'12px', opacity:0.6, marginBottom:'32px'}}>
          <span style={{width:'8px', height:'8px', background:'#4ade80', borderRadius:'50%', display:'inline-block'}}></span>
          MADA V7 SUPREMA • Online • 12 camadas ativas
        </div>
        <h1 style={{fontSize:'48px', fontWeight:800, marginBottom:'32px', lineHeight:1.1}}>O que vamos<br/>construir hoje?</h1>
        <div style={{display:'flex', gap:'12px'}}>
          <textarea
            value={prompt}
            onChange={e=>setPrompt(e.target.value)}
            placeholder="Descreva seu app, site, clone do..."
            style={{flex:1, background:'rgba(255,255,255,0.08)', border:'1px solid rgba(255,255,255,0.15)', borderRadius:'16px', padding:'16px', color:'white', outline:'none', minHeight:'56px', resize:'none'}}
          />
          <button onClick={build} style={{background:'white', color:'black', padding:'0 32px', borderRadius:'16px', fontWeight:800, height:'56px', border:'none', cursor:'pointer'}}>Construir →</button>
        </div>
        <div style={{marginTop:'16px', fontSize:'12px', opacity:0.4}}>MADA está pronta • 12 camadas • auto-entendendo</div>
      </div>
    </div>
  )
}
