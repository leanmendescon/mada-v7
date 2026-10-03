import { logBuild } from '../memory'

export async function programmerAgent(projectId: string, architecture: any) {
  await logBuild(projectId, 'programmer', 'Gerando código...')
  const featureName = architecture.features?.[0] || 'Meu App'
  const files: Record<string, string> = {
    'app/page.tsx': `"use client"
import { useState } from 'react'
export default function Page(){
  const [v,setV]=useState('')
  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold">${featureName}</h1>
      <p className="text-gray-500 mt-2">Gerado por NEXUS V8 - {projectId.slice(0,8)}</p>
      <input value={v} onChange={e=>setV(e.target.value)} className="border rounded p-3 mt-6 w-full" placeholder="Digite algo..." />
      <div className="mt-4 p-4 bg-gray-100 rounded">Você digitou: {v}</div>
    </div>
  )
}`,
    'app/layout.tsx': `export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="pt"><body>{children}</body></html>}`,
    'app/globals.css': `@tailwind base;\n@tailwind components;\n@tailwind utilities;`
  }
  await logBuild(projectId, 'programmer', `Gerou ${Object.keys(files).length} arquivos`)
  return files
}
