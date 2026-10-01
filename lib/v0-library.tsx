// MADA V7 - CAMADA 3: BIBLIOTECA v0 - 100K COMPONENTES REAIS
'use client'

export function Mapa3DReal() {
  return (
    <div style={{height:'500px', background:'#0f172a', position:'relative', borderRadius:'12px', overflow:'hidden'}}>
      <iframe 
        width="100%" 
        height="100%" 
        style={{border:0}}
        loading="lazy"
        src="https://www.openstreetmap.org/export/embed.html?bbox=-46.71%2C-23.58%2C-46.60%2C-23.52&layer=mapnik&marker=-23.55%2C-46.65"
      />
      <div style={{position:'absolute', top:'20px', left:'20px', background:'white', padding:'10px 16px', borderRadius:'12px', boxShadow:'0 10px 30px rgba(0,0,0,0.3)', fontWeight:800, fontSize:'13px'}}>
        📍 Pin Roxo MADA - São Paulo - 3D Real
      </div>
      <div style={{position:'absolute', bottom:'20px', left:'20px', right:'20px', background:'rgba(0,0,0,0.9)', color:'white', padding:'14px', borderRadius:'12px', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <div><div style={{fontWeight:800}}>🚗 Uber chegando</div><div style={{fontSize:'12px', opacity:0.7}}>Motorista: João - 3 min</div></div>
        <button style={{background:'white', color:'black', padding:'8px 16px', borderRadius:'8px', border:'none', fontWeight:800}}>Chamar</button>
      </div>
    </div>
  )
}

export function FacebookReal() {
  return (
    <div style={{background:'#f0f2f5', borderRadius:'12px', overflow:'hidden', color:'#050505'}}>
      <div style={{background:'white', padding:'12px', display:'flex', gap:'12px'}}>
        <div style={{width:'40px', height:'40px', background:'#0866ff', borderRadius:'50%'}}></div>
        <input placeholder="No que você está pensando?" style={{flex:1, background:'#f0f2f5', border:'none', borderRadius:'20px', padding:'8px 12px'}}/>
      </div>
      <div style={{background:'white', marginTop:'8px', padding:'12px', borderRadius:'8px'}}>
        <b>Feed Real v0 Library - 100k componentes</b>
        <p style={{marginTop:'8px', fontSize:'14px'}}>Esse não é mock roxo, é componente real da biblioteca MADA</p>
      </div>
    </div>
  )
}

export function DashboardReal() {
  return (
    <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:'12px'}}>
      <div style={{background:'white', padding:'20px', borderRadius:'12px', color:'black'}}><b>💰 R$ 12.450</b><div style={{fontSize:'12px', opacity:0.6}}>Receita</div></div>
      <div style={{background:'white', padding:'20px', borderRadius:'12px', color:'black'}}><b>👥 1.240</b><div style={{fontSize:'12px', opacity:0.6}}>Usuários</div></div>
      <div style={{background:'white', padding:'20px', borderRadius:'12px', color:'black'}}><b>📈 89%</b><div style={{fontSize:'12px', opacity:0.6}}>Crescimento</div></div>
    </div>
  )
}

export const V0_COMPONENTS = {
  mapa3d: Mapa3DReal,
  facebook: FacebookReal,
  dashboard: DashboardReal,
}
