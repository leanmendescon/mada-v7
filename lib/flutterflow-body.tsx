// MADA V7 - CAMADA 6: CORPO FLUTTERFLOW - EDITOR VISUAL DRAG & DROP
'use client'
import { useState } from 'react'

export function FlutterFlowEditor({ children }: { children: React.ReactNode }) {
  const [selected, setSelected] = useState<string | null>(null)

  return (
    <div className="relative group">
      <div className="absolute -top-8 left-0 bg-black text-white text-xs px-2 py-1 rounded flex gap-2 z-50">
        <span>✋ Drag</span>
        <span>🎨 Editar</span>
        <span>🗑️ Deletar</span>
        <span style={{color:'#a855f7'}}>MADA Corpo Ativo</span>
      </div>
      <div 
        onClick={() => setSelected('active')}
        draggable
        style={{ cursor: 'move', outline: selected ? '2px solid #a855f7' : 'none' }}
      >
        {children}
      </div>
    </div>
  )
}

export function DraggableButton({ text }: { text: string }) {
  return (
    <button 
      draggable
      style={{ background:'#a855f7', color:'white', padding:'10px 20px', borderRadius:'8px', border:'none', fontWeight:800, cursor:'grab' }}
    >
      {text} - Arraste-me (MADA Corpo)
    </button>
  )
}
