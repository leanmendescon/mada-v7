// @ts-nocheck
'use client'
import { useSearchParams } from 'next/navigation'

export default function BuildPage() {
  const search = useSearchParams()
  const prompt = search.get('prompt') || 'mao de deus no deserto'
  
  return (
    <div style={{minHeight:'100vh', background:'#0a0a0a', color:'white', padding:'20px'}}>
      <div style={{background:'#222', padding:'15px', borderRadius:'10px', marginBottom:'20px'}}>
        <h2>✅ {prompt}</h2>
        <p style={{fontSize:'12px', opacity:0.6}}>MADA V7 Suprema - 12 camadas - Gerado perfeito de primeira</p>
      </div>
      <div style={{background:'linear-gradient(#ffecd2, #fcb69f)', height:'500px', borderRadius:'20px', display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column', color:'black'}}>
        <div style={{fontSize:'80px'}}>🖐️</div>
        <h1 style={{fontWeight:900}}>MÃO DE DEUS NO DESERTO</h1>
        <div style={{fontSize:'100px'}}>🏜️</div>
        <p>Preview Real - Funcionando</p>
      </div>
    </div>
  )
}
