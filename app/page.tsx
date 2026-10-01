'use client'
import { useState } from 'react'

export default function Home() {
  const [prompt, setPrompt] = useState('')

  return (
    <div className="min-h-screen bg-[#0a0a0f] flex flex-col text-white" style={{background: 'radial-gradient(ellipse at top right, #2a1a4a 0%, #0a0a0f 70%)'}}>
      <header className="p-6 flex justify-between items-center">
        <span className="text-purple-300 tracking-widest text-sm font-mono">● MADA V7 SUPREMA</span>
        <span className="text-xs text-zinc-500">🟢 Online • 12 camadas ativas</span>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center -mt-20 px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-10 text-center tracking-tight">O que vamos construir hoje?</h1>
        <div className="w-full max-w-3xl relative">
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Descreva seu app, site, clone do Facebook, Instagram, mapa 3D..."
            className="w-full h-36 bg-[#15151f]/80 border border-purple-500/30 rounded-[20px] p-6 text-lg placeholder:text-zinc-500 outline-none focus:border-purple-500 shadow-[0_0_40px_rgba(168,85,247,0.15)] resize-none"
          />
          <button className="absolute bottom-4 right-4 bg-white text-black px-6 py-2 rounded-xl font-bold hover:bg-zinc-200 transition">
            Construir →
          </button>
        </div>
        <p className="mt-8 text-sm text-zinc-500">MADA está pronta • 12 camadas ativas • auto-aprendendo</p>
      </main>
    </div>
  )
}
