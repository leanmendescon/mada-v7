'use client'
import { useState, useEffect } from 'react'

export default function BuildPage({ params }: { params: { id: string } }) {
  const [code, setCode] = useState('MADA V7 com 12 camadas está construindo seu app...')
  const [prompt, setPrompt] = useState('')

  useEffect(() => {
    // Aqui a MADA lê o ID e busca o que você pediu na home
    const savedPrompt = localStorage.getItem('mada_last_prompt') || 'App com mapa 3D'
    setPrompt(savedPrompt)
  }, [])

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white flex flex-col">
      <header className="p-4 border-b border-zinc-800 flex justify-between">
        <span className="text-purple-300 text-sm">● MADA V7 SUPREMA • BUILD {params.id}</span>
        <span className="text-xs text-zinc-500">12 camadas ativas • Construindo {prompt}</span>
      </header>
      <div className="flex-1 grid grid-cols-[350px_1fr_350px]">
        {/* Chat esquerda */}
        <div className="border-r border-zinc-800 p-4">
          <p className="text-sm text-zinc-400 mb-4">Chat com a MADA</p>
          <div className="bg-zinc-900 p-3 rounded-lg text-sm">Construindo: {prompt}</div>
        </div>
        {/* Preview meio */}
        <div className="p-8 flex items-center justify-center bg-zinc-950">
          <div className="text-center">
            <h2 className="text-3xl mb-4">Preview do seu App</h2>
            <p className="text-zinc-500">ID: {params.id}</p>
            <p className="mt-4">Aqui vai aparecer o Facebook, Instagram, Mapa 3D que você pedir</p>
          </div>
        </div>
        {/* Código direita */}
        <div className="border-l border-zinc-800 p-4">
          <p className="text-sm text-zinc-400">Código gerado (12 camadas)</p>
          <pre className="text-xs mt-4 text-zinc-500">{code}</pre>
        </div>
      </div>
    </div>
  )
}
