"use client"
import { useState } from 'react'

export default function Page(){
  const [prompt,setPrompt]=useState('')
  const [loading,setLoading]=useState(false)
  const [res,setRes]=useState<any>(null)

  async function build(){
    setLoading(true)
    const r=await fetch('/api/nexus/build',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({prompt})
    })
    const data = await r.json()
    setRes(data)
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold">NEXUS V8</h1>
      <p className="text-zinc-400 mt-2">Conectado em /api/nexus/build</p>

      <div className="flex gap-4 mt-6">
        <input
          value={prompt}
          onChange={e=>setPrompt(e.target.value)}
          className="flex-1 p-4 bg-zinc-900 border border-zinc-700 rounded text-white"
          placeholder="ex: crie landing de hamburgueria"
        />
        <button
          onClick={build}
          disabled={loading}
          className="bg-white text-black px-8 font-bold rounded disabled:opacity-50"
        >
          {loading?'CONSTRUINDO...':'CONSTRUIR'}
        </button>
      </div>

      {res && (
        <pre className="mt-6 bg-zinc-900 p-4 rounded text-xs overflow-auto max-h-[70vh] border border-zinc-800">
          {JSON.stringify(res,null,2)}
        </pre>
      )}
    </div>
  )
}
